import { registerAs } from '@nestjs/config';
export const key = 'swagger';
export const config = registerAs(key, () => ({
  path: '/swagger',
}));
