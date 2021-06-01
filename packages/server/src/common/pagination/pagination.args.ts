import { Field, ArgsType, Int } from '@nestjs/graphql';
import { GraphQLInt, GraphQLString } from 'graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

/**
 * 分页查询
 * 下一页：
 * after:"ckmq25ic9101374fku9g7oudz6v",first:2
 * 上一页
 * before:"ckmq25ic9101374fku9g7oudz6v",last:2
 */

@ArgsType()
export class PaginationArgs {
  @Type()
  @IsOptional()
  @Field(() => GraphQLInt, { nullable: true })
  skip?: number;
  @Type()
  @IsOptional()
  @Field(() => GraphQLString, { nullable: true })
  after?: string;
  @Type()
  @IsOptional()
  @Field(() => GraphQLString, { nullable: true })
  before?: string;
  @Type()
  @IsOptional()
  @Field(() => GraphQLInt, { nullable: true })
  first?: number;
  @Type()
  @IsOptional()
  @Field(() => GraphQLInt, { nullable: true })
  last?: number;
}
