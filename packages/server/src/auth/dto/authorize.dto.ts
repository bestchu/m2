import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GraphQLString } from 'graphql';

@ArgsType()
export class AuthorizeInput {
  @Type()
  @Field(() => GraphQLString)
  code: string;
  @Type()
  @Field(() => GraphQLString, { description: '应用名称,列如:wechat-applet' })
  app: string;
  @Field(() => GraphQLString, { description: '自动授权现场ID', nullable: true })
  prId: string;
}
