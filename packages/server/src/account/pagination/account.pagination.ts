import { ObjectType, Field, OmitType } from '@nestjs/graphql';
import { PaginationResponse } from '../../common/pagination';
import { Account } from '../entities/account.entity';
import { AccountAuthLogPaginatedResponse } from './account-auth-log.pagination';
@ObjectType()
class AccountPaginated extends OmitType(Account, ['authLogs'] as const) {
  @Field(() => AccountAuthLogPaginatedResponse)
  authLogs: AccountAuthLogPaginatedResponse;
}

@ObjectType()
export class AccountPaginatedResponse extends PaginationResponse(
  AccountPaginated,
) {}
