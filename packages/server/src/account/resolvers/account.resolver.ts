import {
  Resolver,
  Args,
  Mutation,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { findManyCursorConnection } from '../../common/pagination';
import { Account } from '../entities/account.entity';
import { AccountService } from '../services/account.service';
import { AccountCreateInput, AccountUpdateDataInput } from '../dto/account.dto';
import { AccountWhereUniqueInput } from '../dto/account.dto';
import { AccountUpdateInput } from '../dto/account.dto';
import { AccountQueryInput } from '../dto/account.dto';
import { AccountPaginatedResponse } from '../pagination/account.pagination';
import { AccountLocalAuth } from '../entities/account-local-auth.entity';
import { AccountAuthLogQueryInput } from '../dto/account-auth-log.dto';
import { AccountAuthLogPaginatedResponse } from '../pagination/account-auth-log.pagination';
import { AccountEntity } from '../../auth/decorators';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly service: AccountService) {}

  @Mutation(() => Account)
  createAccount(@Args('data') data: AccountCreateInput) {
    return this.service.create({ data });
  }

  @Mutation(() => Account)
  updateAccount(@Args() args: AccountUpdateInput) {
    return this.service.update(args);
  }
  @Mutation(() => Account)
  updateMeAccount(
    @AccountEntity() account: Account,
    @Args('data') data: AccountUpdateDataInput,
  ) {
    return this.service.update({ data, where: { id: account.id } });
  }
  @Query(() => Account)
  account(@Args('where', { nullable: false }) where: AccountWhereUniqueInput) {
    return this.service.findOne({ where });
  }

  @Query(() => AccountPaginatedResponse)
  async accounts(@Args() args: AccountQueryInput) {
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

  @Mutation(() => Account)
  deleteAccount(@Args('where') where: AccountWhereUniqueInput) {
    return this.service.delete({ where });
  }

  @ResolveField(() => AccountLocalAuth)
  localAuth(@Parent() parent: Account) {
    return this.service.findOne({ where: { id: parent.id } }).localAuth();
  }

  @ResolveField(() => AccountAuthLogPaginatedResponse)
  authLogs(@Parent() parent: Account, @Args() args: AccountAuthLogQueryInput) {
    const q = args.getQueryParams();
    return findManyCursorConnection(
      (args) =>
        this.service
          .findOne({ where: { id: parent.id } })
          .authLogs({ ...q, ...args }),
      () =>
        this.service.prisma.accountAuthLog.count({
          where: q.where,
        }),
      args.getPageParams(),
    );
  }
}
