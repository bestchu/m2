import { ConfigModule as Module } from '@nestjs/config';
import { Conf } from './index';

export const ConfigModule = Module.forRoot({
  load: Object.values(Conf),
  isGlobal: true,
});
