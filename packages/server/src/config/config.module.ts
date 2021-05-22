import { ConfigModule as Module } from '@nestjs/config';
import { ConfigList } from './index';

export const ConfigModule = Module.forRoot({
  load: ConfigList,
  isGlobal: true,
});
