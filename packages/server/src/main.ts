import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf, confKey } from './config';
import { EOL } from 'os';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './swagger';
import { json, urlencoded } from 'body-parser';
import { AllExceptionsFilter } from './common/exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<Conf<'app'>>(confKey('app'));
  const graphqlConfig = app.get<Conf<'graphql'>>(confKey('graphql'));
  const swaggerConfig = app.get<Conf<'swagger'>>(confKey('swagger'));
  app.use(json({ limit: appConfig.bodyLimit }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // disableErrorMessages: false,
      // validationError: {
      //   // target: true,
      //   // value: true,
      // },
      // skipMissingProperties: false,
    }),
  );
  app.use(
    urlencoded({
      limit: appConfig.bodyLimit,
      extended: true,
      parameterLimit: appConfig.bodyParameterLimit,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  swaggerSetup(app);
  // Starts listening for shutdown hooks
  app.enableShutdownHooks();
  await app.listen(appConfig.port, appConfig.host, () => {
    Logger.log(`${appConfig.serverName} Server ready${EOL}
    swagger: http://localhost:${appConfig.port}${swaggerConfig.path}${EOL}
    graphql: http://localhost:${appConfig.port}${graphqlConfig.path}${EOL}
    voyager: http://localhost:${appConfig.port}/voyager${EOL}
    ⭐`);
  });
}
bootstrap();
