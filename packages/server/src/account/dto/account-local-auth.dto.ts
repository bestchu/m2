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
export class AccountLocalAuthCreateInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
  @Field(() => GraphQLString, { nullable: false })
  password: string;
}

@InputType()
export class AccountLocalAuthWhereUniqueInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
}

@InputType()
export class AccountLocalAuthWhereInput {
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  aid: StringFilter;
}

@InputType()
export class AccountLocalAuthUpdateDataInput extends PartialType(
  OmitType(AccountLocalAuthCreateInput, ['aid'] as const),
) {}

@ArgsType()
export class AccountLocalAuthUpdateInput {
  @Field(() => AccountLocalAuthUpdateDataInput)
  @Type(() => AccountLocalAuthUpdateDataInput)
  data: AccountLocalAuthUpdateDataInput;
  @Field(() => AccountLocalAuthWhereUniqueInput)
  @Type(() => AccountLocalAuthWhereUniqueInput)
  where: AccountLocalAuthWhereUniqueInput;
}

export enum AccountLocalAuthOrderField {
  aid = 'aid',
  password = 'password',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
registerEnumType(AccountLocalAuthOrderField, {
  name: 'AccountLocalAuthOrderField',
  description:
    'Properties by which accountLocalAuth connections can be ordered.',
});

@InputType()
class AccountLocalAuthOrderByItem {
  @Field(() => AccountLocalAuthOrderField)
  field: AccountLocalAuthOrderField;
  @Field(() => SortOrder)
  order: SortOrder;
}

@ArgsType()
export class AccountLocalAuthQueryInput extends QueryBaseInput<
  AccountLocalAuthWhereInput,
  AccountLocalAuthOrderField
> {
  @Type(() => AccountLocalAuthWhereInput)
  @Field(() => AccountLocalAuthWhereInput, { nullable: true })
  where?: AccountLocalAuthWhereInput;
  @Type(() => AccountLocalAuthOrderByItem)
  @Field(() => [AccountLocalAuthOrderByItem], { nullable: true })
  orderBy?: AccountLocalAuthOrderByItem[];
}
