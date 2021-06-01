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
export class AccountWechatAuthCreateInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
  @Field(() => GraphQLString, { nullable: false })
  openid: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  unionid?: string;
  @Field(() => GraphQLString, { nullable: false })
  session_key: string;
}

@InputType()
export class AccountWechatAuthWhereUniqueInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
}

@InputType()
export class AccountWechatAuthWhereInput {
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  aid: StringFilter;
}

@InputType()
export class AccountWechatAuthUpdateDataInput extends PartialType(
  OmitType(AccountWechatAuthCreateInput, ['aid'] as const),
) {}

@ArgsType()
export class AccountWechatAuthUpdateInput {
  @Field(() => AccountWechatAuthUpdateDataInput)
  @Type(() => AccountWechatAuthUpdateDataInput)
  data: AccountWechatAuthUpdateDataInput;
  @Field(() => AccountWechatAuthWhereUniqueInput)
  @Type(() => AccountWechatAuthWhereUniqueInput)
  where: AccountWechatAuthWhereUniqueInput;
}

export enum AccountWechatAuthOrderField {
  aid = 'aid',
  openid = 'openid',
  unionid = 'unionid',
  session_key = 'session_key',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
registerEnumType(AccountWechatAuthOrderField, {
  name: 'AccountWechatAuthOrderField',
  description:
    'Properties by which accountWechatAuth connections can be ordered.',
});

@InputType()
class AccountWechatAuthOrderByItem {
  @Field(() => AccountWechatAuthOrderField)
  field: AccountWechatAuthOrderField;
  @Field(() => SortOrder)
  order: SortOrder;
}

@ArgsType()
export class AccountWechatAuthQueryInput extends QueryBaseInput<
  AccountWechatAuthWhereInput,
  AccountWechatAuthOrderField
> {
  @Type(() => AccountWechatAuthWhereInput)
  @Field(() => AccountWechatAuthWhereInput, { nullable: true })
  where?: AccountWechatAuthWhereInput;
  @Type(() => AccountWechatAuthOrderByItem)
  @Field(() => [AccountWechatAuthOrderByItem], { nullable: true })
  orderBy?: AccountWechatAuthOrderByItem[];
}
