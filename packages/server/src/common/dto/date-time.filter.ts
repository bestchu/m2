import { Prisma } from '../../prisma';
import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { IsDateString, IsInstance, IsOptional } from 'class-validator';

@InputType()
export class NestedDateTimeFilter implements Prisma.NestedDateTimeFilter {
  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDateString({}, { each: false })
  equals?: Date | string;

  @Field(() => [GraphQLISODateTime], { nullable: true })
  @IsDateString({}, { each: true })
  in?: Array<Date> | Array<string>;

  @Field(() => [GraphQLISODateTime], { nullable: true })
  @IsDateString({}, { each: true })
  notIn?: Array<Date> | Array<string>;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDateString({}, { each: false })
  lt?: Date | string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDateString({}, { each: false })
  lte?: Date | string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDateString({}, { each: false })
  gt?: Date | string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDateString({}, { each: false })
  gte?: Date | string;
}

@InputType()
export class DateTimeFilter
  extends NestedDateTimeFilter
  implements Prisma.DateTimeFilter
{
  @IsOptional()
  @IsInstance(NestedDateTimeFilter, { each: false })
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter | Date | string;
}
