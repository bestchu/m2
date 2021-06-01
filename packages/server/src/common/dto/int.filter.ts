import { Field, InputType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';
import { IsInstance, IsInt, IsOptional } from 'class-validator';
import { Prisma } from '../../prisma';
import { NestedStringFilter } from './string.filter';

@InputType()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class NestedIntFilter implements Prisma.NestedIntFilter {
  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLInt, { nullable: true })
  equals?: number;

  @IsOptional()
  @IsInt({ each: true })
  @Field(() => [GraphQLInt], { nullable: true })
  in?: Array<number>;

  @IsOptional()
  @IsInt({ each: true })
  @Field(() => [GraphQLInt], { nullable: true })
  notIn?: Array<number>;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLInt, { nullable: true })
  lt?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLInt, { nullable: true })
  lte?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLInt, { nullable: true })
  gt?: number;

  @IsOptional()
  @IsInt({ each: false })
  @Field(() => GraphQLInt, { nullable: true })
  gte?: number;
}

@InputType()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class IntFilter extends NestedIntFilter implements Prisma.IntFilter {
  @IsOptional()
  @IsInstance(NestedIntFilter, { each: false })
  @Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter;
}
