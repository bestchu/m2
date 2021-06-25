import { Field, ObjectType } from '@nestjs/graphql';
import { PlatformProduct as IPlatformProduct } from '@prisma/client';

@ObjectType()
export class PlatformProduct implements IPlatformProduct {
  @Field()
  id: string;
  @Field()
  platformId: string;
}
