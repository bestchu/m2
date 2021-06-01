import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Account } from './account.entity';

@ObjectType({ isAbstract: false, description: undefined })
export class AccountLocalAuth {
  @Field(() => GraphQLString, { nullable: false })
  aid: string;
  @Field(() => Account, { nullable: false })
  account: Account;
  @Field(() => GraphQLString, { nullable: false })
  password: string;
  @Field(() => GraphQLISODateTime, { nullable: false })
  createdAt: Date;
  @Field(() => GraphQLISODateTime, { nullable: false })
  updatedAt: Date;
}
