import * as AppConfig from './app.config';
import * as SwaggerConfig from './swagger.config';
import * as GraphqlConfig from './graphql.config';
import * as SecurityConfig from './security.config';
import { ConfigType } from '@nestjs/config';
type ConfigKeys = keyof typeof Conf;
export const Conf = {
  [AppConfig.key]: AppConfig.config,
  [SwaggerConfig.key]: SwaggerConfig.config,
  [GraphqlConfig.key]: GraphqlConfig.config,
  [SecurityConfig.key]: SecurityConfig.config,
};
export function confKey(key: ConfigKeys) {
  return Conf[key].KEY;
}
export type Conf<key extends ConfigKeys> = ConfigType<typeof Conf[key]>;
