import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { PasswordService } from '../../common/services/password.service';
import { plainToClass } from 'class-transformer';
import { Account } from '../entities';

@Injectable()
export class AccountValidateService {
  constructor(
    public readonly prisma: PrismaService,
    public readonly passwordService: PasswordService,
  ) {}

  /**
   * 本地账号验证
   * @param username
   * @param password
   */
  async validateLocal(username: string, password: string) {
    const account = await this.prisma.account.findUnique({
      include: { localAuth: true },
      where: {
        username,
      },
    });
    if (
      account &&
      (await this.passwordService.compare(password, account.localAuth.password))
    ) {
      return plainToClass(Account, account);
    }
  }
}
