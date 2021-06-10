import { Injectable } from '@nestjs/common';
import { PrismaService, Prisma } from '../../prisma';
import { PasswordService } from '../../common/services/password.service';

@Injectable()
export class AccountService {
  constructor(
    public readonly prisma: PrismaService,
    public readonly password: PasswordService,
  ) {}

  create<T extends Prisma.AccountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>,
  ) {
    return this.prisma.account.create<T>(args);
  }

  findOne<T extends Prisma.AccountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
  ) {
    return this.prisma.account.findUnique(args);
  }

  findMany<T extends Prisma.AccountFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
  ) {
    return this.prisma.account.findMany(args);
  }

  count<T extends Prisma.AccountCountArgs>(
    args?: Prisma.Subset<T, Prisma.AccountCountArgs>,
  ) {
    return this.prisma.account.count(args);
  }

  update<T extends Prisma.AccountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>,
  ) {
    return this.prisma.account.update<T>(args);
  }

  delete<T extends Prisma.AccountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>,
  ) {
    return this.prisma.account.delete(args);
  }
}
