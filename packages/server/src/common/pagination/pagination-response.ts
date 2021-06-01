import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PageInfo } from './page-info';
type EdgeType<T> = {
  cursor: string;
  node: T;
};
type IPagination<T> = {
  edges: Array<EdgeType<T>>;
  pageInfo: PageInfo;
  totalCount: number;
};

export function PaginationResponse<T>(classRef: Type<T>): Type<IPagination<T>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field((type) => String)
    cursor: string;

    @Field((type) => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class Pagination {
    @Field((type) => [EdgeType], { nullable: false })
    edges: Array<EdgeType>;

    // @Field((type) => [TItemClass], { nullable: true })
    // nodes: Array<TItem>;

    @Field((type) => PageInfo)
    pageInfo: PageInfo;

    @Field((type) => Int)
    totalCount: number;
  }
  return Pagination as Type<IPagination<T>>;
}
