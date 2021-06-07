import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

import { Response } from 'express';
import { formatError, GraphQLError } from 'graphql';

@Catch(HttpException)
export class AllExceptionsFilter
  implements ExceptionFilter, GqlExceptionFilter
{
  public catch(exception: HttpException, host: ArgumentsHost) {
    const statusCode = exception.getStatus();
    const requestType = host.getType<string>();
    const responseData = {
      statusCode,
      timestamp: new Date().toISOString(),
      message: exception.getResponse(),
    };
    switch (requestType) {
      case 'graphql': {
        // const gqlHost = GqlArgumentsHost.create(host);
        // const gqlCtx = gqlHost.getContext();
        // const gqlResponse = gqlCtx.req.res;
        // gqlResponse
        //   // .status(statusCode)
        //   .json([formatError(exception.getResponse() as GraphQLError)]);
        // return [formatError(exception.getResponse() as GraphQLError)];
        break;
      }
      case 'http': {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        if (Object.keys(response).length) {
          response.status(statusCode).json(responseData);
        }
        return exception;
      }
      default: {
        console.log(requestType, exception);
        return exception;
      }
    }
  }
}
