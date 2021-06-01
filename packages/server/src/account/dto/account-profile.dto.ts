import {
  InputType,
  Field,
  ArgsType,
  PartialType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GraphQLString } from 'graphql';
import { StringFilter, QueryBaseInput } from '../../common/dto';
import { SortOrder } from '../../common/order';

@InputType()
export class AccountProfileCreateInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
}

@InputType()
export class AccountProfileWhereUniqueInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
}

@InputType()
export class AccountProfileWhereInput {
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  aid: StringFilter;
}

export enum AccountProfileOrderField {
  aid = 'aid',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
registerEnumType(AccountProfileOrderField, {
  name: 'AccountProfileOrderField',
  description: 'Properties by which accountProfile connections can be ordered.',
});

@InputType()
class AccountProfileOrderByItem {
  @Field(() => AccountProfileOrderField)
  field: AccountProfileOrderField;
  @Field(() => SortOrder)
  order: SortOrder;
}

@ArgsType()
export class AccountProfileQueryInput extends QueryBaseInput<
  AccountProfileWhereInput,
  AccountProfileOrderField
> {
  @Type(() => AccountProfileWhereInput)
  @Field(() => AccountProfileWhereInput, { nullable: true })
  where?: AccountProfileWhereInput;
  @Type(() => AccountProfileOrderByItem)
  @Field(() => [AccountProfileOrderByItem], { nullable: true })
  orderBy?: AccountProfileOrderByItem[];
}
