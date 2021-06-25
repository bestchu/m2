import { Field, ObjectType } from '@nestjs/graphql';
import { PlatformType as IPlatformType } from '@prisma/client';

@ObjectType()
export class PlatformType implements IPlatformType {
  @Field()
  id: string;
  @Field()
  name: string;
}
