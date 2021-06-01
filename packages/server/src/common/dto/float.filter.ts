import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsInstance } from 'class-validator';
import { GraphQLFloat } from 'graphql';
import { Prisma } from '../../prisma';
import { NestedStringFilter } from './string.filter';

@InputType()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class NestedFloatFilter implements Prisma.NestedFloatFilter {
  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLFloat, { nullable: true })
  equals?: number;

  @IsOptional()
  @IsInt({ each: true })
  @Field(() => [GraphQLFloat], { nullable: true })
  in?: Array<number>;

  @IsOptional()
  @IsInt({ each: true })
  @Field(() => [GraphQLFloat], { nullable: true })
  notIn?: Array<number>;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLFloat, { nullable: true })
  lt?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLFloat, { nullable: true })
  lte?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLFloat, { nullable: true })
  gt?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLFloat, { nullable: true })
  gte?: number;
}

@InputType()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class FloatFilter extends NestedFloatFilter implements Prisma.FloatFilter
{
  @IsOptional()
  @IsInstance(NestedFloatFilter, { each: false })
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: NestedFloatFilter | number;
}
