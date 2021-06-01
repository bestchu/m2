import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Account } from './account.entity';

@ObjectType({ isAbstract: false, description: undefined })
export class AccountAuthLog {
  @Field(() => GraphQLString, { nullable: false })
  id: string;
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
  @Field(() => Account, { nullable: false })
  account: Account;
  @Field(() => GraphQLString, { nullable: false })
  authType: string;
  @Field(() => GraphQLString, { nullable: false })
  ip: string;
  @Field(() => GraphQLString, { nullable: false })
  version: string;
  @Field(() => GraphQLString, { nullable: false })
  platform: string;
  @Field(() => GraphQLString, { nullable: true })
  screen?: string;
  @Field(() => GraphQLString, { nullable: false })
  osFamily: string;
  @Field(() => GraphQLString, { nullable: false })
  osArchitecture: string;
  @Field(() => GraphQLString, { nullable: false })
  osVersion: string;
  @Field(() => GraphQLISODateTime, { nullable: false })
  createdAt: Date;
}
