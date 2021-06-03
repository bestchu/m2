import { Inject, Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { PrismaService } from '../prisma';
import { Conf, confKey } from '../config';
import { createContext } from './graphql-context';
@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  @Inject(confKey('graphql'))
  private graphqlConfig: Conf<'graphql'>;
  @Inject(confKey('app'))
  private appConfig: Conf<'app'>;
  @Inject(PrismaService)
  private prisma: PrismaService;
  public createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    const { debug } = this.appConfig;
    return {
      ...this.graphqlConfig,
      debug,
      playground: debug,
      // schema: schema,
      context: createContext.bind(this.prisma),
    };
  }
}
