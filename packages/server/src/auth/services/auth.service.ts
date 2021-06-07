import { UnauthorizedException } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Account } from '../../account/entities';
import { Credentials } from '../dto';
import { Token } from '../entities';
import { AccountService, AccountValidateService } from '../../account/services';
import { PasswordService } from '../../common/services/password.service';
import { plainToClass } from 'class-transformer';
import { JwtDto } from '../dto';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(AccountService)
  private readonly accountService: AccountService;
  @Inject(AccountValidateService)
  private readonly accountValidateService: AccountValidateService;
  @Inject(PasswordService)
  private readonly passwordService: PasswordService;
  public async login(data: Credentials) {
    const account = await this.accountValidateService.validateLocal(
      data.username,
      data.password,
    );
    if (account) {
      return this.auth(account);
    } else {
      throw new UnauthorizedException(`Invalid username or password`);
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
