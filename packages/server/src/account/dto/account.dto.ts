import {
  InputType,
  Field,
  ArgsType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GraphQLString, GraphQLInt } from 'graphql';
import { StringFilter, QueryBaseInput } from '../../common/dto';
import { SortOrder } from '../../common/order';

@InputType()
export class AccountCreateInput {
  @Field(() => GraphQLString, { nullable: false })
  username: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  email?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  mobile?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  nickName?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  avatarUrl?: string;
  @Field(() => GraphQLInt, { nullable: true })
  @IsOptional()
  gender?: number;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  province?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  city?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  country?: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  language?: string;
}

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => GraphQLString, { nullable: false })
  id: string;
}

@InputType()
export class AccountWhereInput {
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  id: StringFilter;
}

@InputType()
export class AccountUpdateDataInput extends PartialType(AccountCreateInput) {}

@ArgsType()
export class AccountUpdateInput {
  @Field(() => AccountUpdateDataInput)
  @Type(() => AccountUpdateDataInput)
  data: AccountUpdateDataInput;
  @Field(() => AccountWhereUniqueInput)
  @Type(() => AccountWhereUniqueInput)
  where: AccountWhereUniqueInput;
}

export enum AccountOrderField {
  id = 'id',
  username = 'username',
  email = 'email',
  mobile = 'mobile',
  nickName = 'nickName',
  avatarUrl = 'avatarUrl',
  gender = 'gender',
  province = 'province',
  city = 'city',
  country = 'country',
  language = 'language',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
registerEnumType(AccountOrderField, {
  name: 'AccountOrderField',
  description: 'Properties by which account connections can be ordered.',
});

@InputType()
class AccountOrderByItem {
  @Field(() => AccountOrderField)
  field: AccountOrderField;
  @Field(() => SortOrder)
  order: SortOrder;
}

@ArgsType()
export class AccountQueryInput extends QueryBaseInput<
  AccountWhereInput,
  AccountOrderField
> {
  @Type(() => AccountWhereInput)
  @Field(() => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput;
  @Type(() => AccountOrderByItem)
  @Field(() => [AccountOrderByItem], { nullable: true })
  orderBy?: AccountOrderByItem[];
}
