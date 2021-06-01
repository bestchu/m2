import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '../../prisma';

@Injectable()
export class AccountLocalAuthService {
  constructor(public readonly prisma: PrismaService) {}

  create<T extends Prisma.AccountLocalAuthCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountLocalAuthCreateArgs>,
  ) {
    return this.prisma.accountLocalAuth.create<T>(args);
  }

  findOne<T extends Prisma.AccountLocalAuthFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountLocalAuthFindUniqueArgs>,
  ) {
    return this.prisma.accountLocalAuth.findUnique(args);
  }

  findMany<T extends Prisma.AccountLocalAuthFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountLocalAuthFindManyArgs>,
  ) {
    return this.prisma.accountLocalAuth.findMany(args);
  }

  count<T extends Prisma.AccountLocalAuthCountArgs>(
    args?: Prisma.Subset<T, Prisma.AccountLocalAuthCountArgs>,
  ) {
    return this.prisma.accountLocalAuth.count(args);
  }

  update<T extends Prisma.AccountLocalAuthUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountLocalAuthUpdateArgs>,
  ) {
    return this.prisma.accountLocalAuth.update<T>(args);
  }

  delete<T extends Prisma.AccountLocalAuthDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountLocalAuthDeleteArgs>,
  ) {
    return this.prisma.accountLocalAuth.delete(args);
  }
}
