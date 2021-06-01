import { Module, Global } from '@nestjs/common';
import * as Services from './services';
import * as Resolvers from './resolvers';
@Global()
@Module({
  providers: [...Object.values(Services), ...Object.values(Resolvers)],
  exports: [...Object.values(Services)],
})
export class AccountModule {}
