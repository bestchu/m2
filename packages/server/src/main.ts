import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import type { Config } from './config';
import { ConfigKeys } from './config';
import { EOL } from 'os';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appConfig = configService.get<Config['app']>(ConfigKeys.app);
  const graphqlConfig = configService.get<Config['graphql']>(
    ConfigKeys.graphql,
  );
  const swaggerConfig = configService.get<Config['swagger']>(
    ConfigKeys.swagger,
  );
  await app.listen(appConfig.port, appConfig.host, () => {
    Logger.log(`${appConfig.serverName} Server ready${EOL}
    swagger: http://localhost:${appConfig.port}${swaggerConfig.path}${EOL}
    graphql: http://localhost:${appConfig.port}${graphqlConfig.path}${EOL}
    voyager: http://localhost:${appConfig.port}/voyager${EOL}
    ⭐`);
  });
}
bootstrap();
