import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { GraphQLString, GraphQLInt } from 'graphql';
import { AccountLocalAuth } from './account-local-auth.entity';
import { AccountAuthLog } from './account-auth-log.entity';

@ObjectType({ isAbstract: false, description: undefined })
export class Account {
  @Field(() => GraphQLString, { nullable: false })
  id: string;
  @Field(() => GraphQLString, { nullable: false })
  username: string;
  @Field(() => GraphQLString, { nullable: true })
  email?: string;
  @Field(() => GraphQLString, { nullable: true })
  mobile?: string;
  @Field(() => GraphQLString, { nullable: true })
  nickName?: string;
  @Field(() => GraphQLString, { nullable: true })
  avatarUrl?: string;
  @Field(() => GraphQLInt, { nullable: true })
  gender?: number;
  @Field(() => GraphQLString, { nullable: true })
  province?: string;
  @Field(() => GraphQLString, { nullable: true })
  city?: string;
  @Field(() => GraphQLString, { nullable: true })
  country?: string;
  @Field(() => GraphQLString, { nullable: true })
  language?: string;
  @Field(() => GraphQLISODateTime, { nullable: false })
  createdAt: Date;
  @Field(() => GraphQLISODateTime, { nullable: false })
  updatedAt: Date;
  @Field(() => AccountLocalAuth, { nullable: true })
  localAuth?: AccountLocalAuth;
  @Field(() => [AccountAuthLog], { nullable: false })
  authLogs: AccountAuthLog[];
}
