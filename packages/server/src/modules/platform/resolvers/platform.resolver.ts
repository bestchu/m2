import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Platform } from '../entities';

@Resolver(() => Platform)
export class PlatformResolver {
  @Query(() => Platform)
  platform() {
    //
  }
  @Query(() => [Platform])
  platforms() {
    //
  }
  @Mutation(() => Platform)
  platformCreate() {
    //
  }
  @Mutation(() => Platform)
  platformUpdate() {
    //
  }
  @Mutation(() => Platform)
  platformDelete() {
    //
  }
  @Mutation(() => Platform)
  platformManyDelete() {
    //
  }
}
