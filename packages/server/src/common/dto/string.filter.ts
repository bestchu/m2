import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '../../prisma';
import { IsOptional, IsInstance, IsString } from 'class-validator';
import { GraphQLString } from 'graphql';

@InputType()
export class NestedStringFilter implements Prisma.NestedStringFilter {
  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  equals?: string;

  @Field(() => [GraphQLString], { nullable: true })
  @IsOptional({ each: true })
  @IsString({ each: true })
  in?: Array<string>;

  @Field(() => [GraphQLString], { nullable: true })
  @IsOptional({ each: true })
  @IsString({ each: true })
  notIn?: Array<string>;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  lt?: string;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  @IsString({ each: false })
  lte?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  @IsString({ each: false })
  gt?: string;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  gte?: string;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  contains?: string;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  startsWith?: string;

  @IsOptional()
  @IsString({ each: false })
  @Field(() => GraphQLString, { nullable: true })
  endsWith?: string;
}

@InputType()
export class StringFilter
  extends NestedStringFilter
  implements Prisma.StringFilter
{
  @IsOptional()
  @IsInstance(NestedStringFilter)
  @Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | string;
}
