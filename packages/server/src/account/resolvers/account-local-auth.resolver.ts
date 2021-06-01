import {
  Resolver,
  Args,
  Mutation,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { findManyCursorConnection } from '../../common/pagination';
import { AccountLocalAuth } from '../entities/account-local-auth.entity';
import { AccountLocalAuthService } from '../services/account-local-auth.service';
import { AccountLocalAuthCreateInput } from '../dto/account-local-auth.dto';
import { AccountLocalAuthWhereUniqueInput } from '../dto/account-local-auth.dto';
import { AccountLocalAuthUpdateInput } from '../dto/account-local-auth.dto';
import { AccountLocalAuthQueryInput } from '../dto/account-local-auth.dto';
import { AccountLocalAuthPaginatedResponse } from '../pagination/account-local-auth.pagination';
import { Account } from '../entities/account.entity';

@Resolver(() => AccountLocalAuth)
export class AccountLocalAuthResolver {
  constructor(private readonly service: AccountLocalAuthService) {}

  @Mutation(() => AccountLocalAuth)
  createAccountLocalAuth(@Args('data') data: AccountLocalAuthCreateInput) {
    return this.service.create({ data });
  }

  @Mutation(() => AccountLocalAuth)
  updateAccountLocalAuth(@Args() args: AccountLocalAuthUpdateInput) {
    return this.service.update(args);
  }

  @Query(() => AccountLocalAuth)
  accountLocalAuth(
    @Args('where', { nullable: false }) where: AccountLocalAuthWhereUniqueInput,
  ) {
    return this.service.findOne({ where });
  }

  @Query(() => AccountLocalAuthPaginatedResponse)
  async accountLocalAuths(@Args() args: AccountLocalAuthQueryInput) {
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

  @Mutation(() => AccountLocalAuth)
  deleteAccountLocalAuth(
    @Args('where') where: AccountLocalAuthWhereUniqueInput,
  ) {
    return this.service.delete({ where });
  }

  @ResolveField(() => Account)
  account(@Parent() parent: AccountLocalAuth) {
    return this.service.findOne({ where: { aid: parent.aid } }).account();
  }
}
