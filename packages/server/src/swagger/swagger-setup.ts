import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigKeys, Config } from '../config';
export function swaggerSetup(
  app: INestApplication,
  configService: ConfigService,
) {
  const appConfig = configService.get<Config['app']>(ConfigKeys.app);
  const swaggerConfig = configService.get<Config['swagger']>(
    ConfigKeys.swagger,
  );
  const config = new DocumentBuilder()
    .setTitle(appConfig.serverName)
    .setDescription(`${appConfig.serverName} restful API`)
    .setVersion(appConfig.version)
    .addBasicAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerConfig.path, app, swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customCssUrl: '../swagger/swagger.css',
    customfavIcon: '../swagger/favicon.png',
    customSiteTitle: appConfig.serverName,
  });
}
