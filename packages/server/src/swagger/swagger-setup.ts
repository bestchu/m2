import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { Conf, confKey } from '../config';
export function swaggerSetup(app: INestApplication) {
  const appConfig = app.get<Conf<'app'>>(confKey('app'));
  const swaggerConfig = app.get<Conf<'swagger'>>(confKey('swagger'));
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
