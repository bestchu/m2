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
export class AccountAuthLogCreateInput {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
  @Field(() => GraphQLString, { nullable: false })
  authType: string;
  @Field(() => GraphQLString, { nullable: false })
  ip: string;
  @Field(() => GraphQLString, { nullable: false })
  version: string;
  @Field(() => GraphQLString, { nullable: false })
  platform: string;
  @Field(() => GraphQLString, { nullable: true })
  @IsOptional()
  screen?: string;
  @Field(() => GraphQLString, { nullable: false })
  osFamily: string;
  @Field(() => GraphQLString, { nullable: false })
  osArchitecture: string;
  @Field(() => GraphQLString, { nullable: false })
  osVersion: string;
}

@InputType()
export class AccountAuthLogWhereUniqueInput {
  @Field(() => GraphQLString, { nullable: false })
  id: string;
}

@InputType()
export class AccountAuthLogWhereInput {
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  id: StringFilter;
  @Field(() => StringFilter, { nullable: true, defaultValue: {} })
  @IsOptional()
  aid: StringFilter;
}

@InputType()
export class AccountAuthLogUpdateDataInput extends PartialType(
  OmitType(AccountAuthLogCreateInput, ['aid'] as const),
) {}

@ArgsType()
export class AccountAuthLogUpdateInput {
  @Field(() => AccountAuthLogUpdateDataInput)
  @Type(() => AccountAuthLogUpdateDataInput)
  data: AccountAuthLogUpdateDataInput;
  @Field(() => AccountAuthLogWhereUniqueInput)
  @Type(() => AccountAuthLogWhereUniqueInput)
  where: AccountAuthLogWhereUniqueInput;
}

export enum AccountAuthLogOrderField {
  id = 'id',
  aid = 'aid',
  authType = 'authType',
  ip = 'ip',
  version = 'version',
  platform = 'platform',
  screen = 'screen',
  osFamily = 'osFamily',
  osArchitecture = 'osArchitecture',
  osVersion = 'osVersion',
  createdAt = 'createdAt',
}
registerEnumType(AccountAuthLogOrderField, {
  name: 'AccountAuthLogOrderField',
  description: 'Properties by which accountAuthLog connections can be ordered.',
});

@InputType()
class AccountAuthLogOrderByItem {
  @Field(() => AccountAuthLogOrderField)
  field: AccountAuthLogOrderField;
  @Field(() => SortOrder)
  order: SortOrder;
}

@ArgsType()
export class AccountAuthLogQueryInput extends QueryBaseInput<
  AccountAuthLogWhereInput,
  AccountAuthLogOrderField
> {
  @Type(() => AccountAuthLogWhereInput)
  @Field(() => AccountAuthLogWhereInput, { nullable: true })
  where?: AccountAuthLogWhereInput;
  @Type(() => AccountAuthLogOrderByItem)
  @Field(() => [AccountAuthLogOrderByItem], { nullable: true })
  orderBy?: AccountAuthLogOrderByItem[];
}
