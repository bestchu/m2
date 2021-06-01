import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '../../prisma';

@Injectable()
export class AccountAuthLogService {
  constructor(public readonly prisma: PrismaService) {}

  create<T extends Prisma.AccountAuthLogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountAuthLogCreateArgs>,
  ) {
    return this.prisma.accountAuthLog.create<T>(args);
  }

  findOne<T extends Prisma.AccountAuthLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountAuthLogFindUniqueArgs>,
  ) {
    return this.prisma.accountAuthLog.findUnique(args);
  }

  findMany<T extends Prisma.AccountAuthLogFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountAuthLogFindManyArgs>,
  ) {
    return this.prisma.accountAuthLog.findMany(args);
  }

  count<T extends Prisma.AccountAuthLogCountArgs>(
    args?: Prisma.Subset<T, Prisma.AccountAuthLogCountArgs>,
  ) {
    return this.prisma.accountAuthLog.count(args);
  }

  update<T extends Prisma.AccountAuthLogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountAuthLogUpdateArgs>,
  ) {
    return this.prisma.accountAuthLog.update<T>(args);
  }

  delete<T extends Prisma.AccountAuthLogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountAuthLogDeleteArgs>,
  ) {
    return this.prisma.accountAuthLog.delete(args);
  }
}
