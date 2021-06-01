import { ArgsType } from '@nestjs/graphql';
import { PaginationArgs } from '../pagination';
import { getOrderBy, SortOrder } from '../order';

@ArgsType()
export abstract class QueryBaseInput<
  T1,
  T2 extends string,
> extends PaginationArgs {
  where?: T1;
  orderBy?: { field: T2; order: SortOrder }[];
  getQueryParams() {
    return {
      where: this.where || {},
      orderBy: this.orderBy ? getOrderBy(this.orderBy) : [],
    };
  }
  getPageParams() {
    return {
      first: this.first,
      last: this.last,
      before: this.before,
      after: this.after,
    };
  }
}
