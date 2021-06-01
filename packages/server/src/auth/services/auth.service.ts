import { UnauthorizedException } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Account } from '../../account/entities';
import { Credentials } from '../dto';
import { Token } from '../entities';
import { AccountService } from '../../account/services';
import { PasswordService } from '../../common/services/password.service';
import { plainToClass } from 'class-transformer';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { JwtDto } from '../dto';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(AccountService)
  private readonly accountService: AccountService;
  @Inject(PasswordService)
  private readonly passwordService: PasswordService;
  public async login(data: Credentials) {
    const account = await this.accountService.prisma.account.findUnique({
      include: { localAuth: true },
      where: {
        username: data.username,
      },
    });
    if (account) {
      if (
        await this.passwordService.compare(
          data.password,
          account.localAuth.password,
        )
      ) {
        return this.auth(plainToClass(Account, account));
      }
      throw new BadRequestException('Invalid password');
    } else {
      throw new NotFoundException(`No user found for email: ${data.username}`);
    }
  }
  public auth(account: Account) {
    const token = this.generateToken({
      aid: account.id,
    });
    return { account, ...token };
  }
  async validateUser(userId: string): Promise<Account> {
    const account = this.accountService.findOne({ where: { id: userId } });
    return plainToClass(Account, account);
  }

  async getUserFromToken(token: string): Promise<Account> {
    const id = (this.jwtService.decode(token) as JwtDto).aid;
    const account = this.accountService.findOne({ where: { id } });
    return plainToClass(Account, account);
  }

  public generateToken(payload: JwtDto): Token {
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload);
    return {
      accessToken,
      refreshToken,
    };
  }

  public refreshToken(token: string) {
    try {
      const { aid } = this.jwtService.verify(token);
      return this.generateToken({ aid });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
