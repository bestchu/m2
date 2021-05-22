import { ConfigType, registerAs } from '@nestjs/config';
export const key = 'swagger';
export const config = registerAs(key, () => ({
  path: '/swagger',
}));
export type Config = ConfigType<typeof config>;
