import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { PrismaService } from '../prisma';
import { Conf, confKey } from '../config';
import { createContext } from './graphql-context';
import { GraphQLError } from 'graphql';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ValidationError } from 'class-validator';

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
      formatError: (e: GraphQLError) => {
        return e;
        // const originalError = e.originalError;
        // console.log(e);
        // const locations = e.locations;
        // const path = e.path;
        // if (originalError instanceof HttpException) {
        //   const status = originalError.getStatus();
        //   let message = originalError.message;
        //   if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        //     message = 'Some unknown error occurred';
        //   }
        //   return {
        //     code: status,
        //     message,
        //   };
        // }
        // // if (originalError instanceof ValidationError) {
        // //   return {
        // //     code: originalError.extensions.code,
        // //     message: originalError.message,
        // //     locations: originalError.locations,
        // //   };
        // // }
        // return {
        //   code: originalError.name,
        //   message: originalError.message,
        // };
      },
    };
  }
}
