import { Field, ObjectType } from '@nestjs/graphql';
import { Token } from './token.entity';
import { Account } from '../../account/entities';

@ObjectType()
export class Auth extends Token {
  @Field(() => Account)
  account: Account;
}
