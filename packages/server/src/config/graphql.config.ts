import { ConfigType, registerAs } from '@nestjs/config';
import { join } from 'path';
import { GqlModuleOptions } from '@nestjs/graphql';
export const key = 'graphql';
export const config = registerAs(
  key,
  () =>
    ({
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
      path: '/graphql',
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    } as GqlModuleOptions),
);
// as GqlModuleOptions
export type Config = ConfigType<typeof config>;
