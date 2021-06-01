import { ObjectType } from '@nestjs/graphql';
import { PaginationResponse } from '../../common/pagination';
import { AccountAuthLog } from '../entities/account-auth-log.entity';

@ObjectType()
export class AccountAuthLogPaginatedResponse extends PaginationResponse(
  AccountAuthLog,
) {}
