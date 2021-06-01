import { ObjectType } from '@nestjs/graphql';
import { PaginationResponse } from '../../common/pagination';
import { AccountLocalAuth } from '../entities/account-local-auth.entity';

@ObjectType()
export class AccountLocalAuthPaginatedResponse extends PaginationResponse(
  AccountLocalAuth,
) {}
