import { ConfigType, registerAs } from '@nestjs/config';

export const key = 'app';
export const config = registerAs(key, () => ({
  serverName: 'NEcho',
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT || 8091,
  debug: true,
  version: '',
  // socketPort: 8081,
  // socketPingInterval: 3000,
  // socketPinkTimeout: 10000,
  // socketIoPath: '/socket.io',
  bodyLimit: '50mb',
  bodyParameterLimit: 50000,
}));
export type Config = ConfigType<typeof config>;
