import { Inject, Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigKeys, GraphqlConfig, AppConfig } from 'src/config';
import { createContext } from './graphql-context';
@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  @Inject(ConfigKeys.graphql)
  private graphqlConfig: GraphqlConfig;
  @Inject(ConfigKeys.app)
  private appConfig: AppConfig;
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
