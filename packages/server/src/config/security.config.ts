import { registerAs } from '@nestjs/config';

export const key = 'security';
export const config = registerAs(key, () => ({
  jwtSecret: process.env.JWT_SECRET || 'm&XAFzBpM3es',
  expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  refreshIn: process.env.JWT_REFRESH_IN || '7d',
  bcryptSaltOrRound: process.env.BCRYPT_SALT_ROUND || '10',
}));
