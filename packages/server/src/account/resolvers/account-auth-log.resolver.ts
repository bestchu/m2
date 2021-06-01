import {
  Resolver,
  Args,
  Mutation,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { findManyCursorConnection } from '../../common/pagination';
import { AccountAuthLog } from '../entities/account-auth-log.entity';
import { AccountAuthLogService } from '../services/account-auth-log.service';
import { AccountAuthLogCreateInput } from '../dto/account-auth-log.dto';
import { AccountAuthLogWhereUniqueInput } from '../dto/account-auth-log.dto';
import { AccountAuthLogUpdateInput } from '../dto/account-auth-log.dto';
import { AccountAuthLogQueryInput } from '../dto/account-auth-log.dto';
import { AccountAuthLogPaginatedResponse } from '../pagination/account-auth-log.pagination';
import { Account } from '../entities/account.entity';

@Resolver(() => AccountAuthLog)
export class AccountAuthLogResolver {
  constructor(private readonly service: AccountAuthLogService) {}

  @Mutation(() => AccountAuthLog)
  createAccountAuthLog(@Args('data') data: AccountAuthLogCreateInput) {
    return this.service.create({ data });
  }

  @Mutation(() => AccountAuthLog)
  updateAccountAuthLog(@Args() args: AccountAuthLogUpdateInput) {
    return this.service.update(args);
  }

  @Query(() => AccountAuthLog)
  accountAuthLog(
    @Args('where', { nullable: false }) where: AccountAuthLogWhereUniqueInput,
  ) {
    return this.service.findOne({ where });
  }

  @Query(() => AccountAuthLogPaginatedResponse)
  async accountAuthLogs(@Args() args: AccountAuthLogQueryInput) {
    const q = args.getQueryParams();
    return findManyCursorConnection(
      (args) => this.service.findMany({ ...q, ...args }),
      () =>
        this.service.count({
          where: q.where,
        }),
      args.getPageParams(),
    );
  }

  @Mutation(() => AccountAuthLog)
  deleteAccountAuthLog(@Args('where') where: AccountAuthLogWhereUniqueInput) {
    return this.service.delete({ where });
  }

  @ResolveField(() => Account)
  account(@Parent() parent: AccountAuthLog) {
    return this.service.findOne({ where: { id: parent.id } }).account();
  }
}
