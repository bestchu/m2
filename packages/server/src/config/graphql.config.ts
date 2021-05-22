import { ConfigType, registerAs } from '@nestjs/config';
import { join } from 'path';
export const key = 'graphql';
export const config = registerAs(key, () => ({
  playground: true,
  autoSchemaFile: true,
  sortSchema: true,
  path: '/graphql',
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  },
}));
// as GqlModuleOptions
export type Config = ConfigType<typeof config>;
