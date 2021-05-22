import * as AppConfig from './app.config';
import * as SwaggerConfig from './swagger.config';
import * as GraphqlConfig from './graphql.config';

export const ConfigList = [
  AppConfig.config,
  SwaggerConfig.config,
  GraphqlConfig.config,
];
export const ConfigKeys = {
  [AppConfig.key]: AppConfig.key,
  [SwaggerConfig.key]: SwaggerConfig.key,
  [GraphqlConfig.key]: GraphqlConfig.key,
};
export interface Config {
  [AppConfig.key]: AppConfig.Config;
  [SwaggerConfig.key]: SwaggerConfig.Config;
  [GraphqlConfig.key]: GraphqlConfig.Config;
}
