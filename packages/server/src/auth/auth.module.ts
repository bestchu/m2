import { Global, HttpModule, Module } from '@nestjs/common';
import * as Services from './services';
import * as Resolvers from './resolvers';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './services/jwt-config.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards';
import { AuthorizationService } from './authorization.service';
import { PassportModule } from '@nestjs/passport';
import { AccountModule } from '../account/account.module';
import { JwtStrategy } from './strategy';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    HttpModule,
    AccountModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    ...Object.values(Services),
    ...Object.values(Resolvers),
    JwtStrategy,
    AuthorizationService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [...Object.values(Services), JwtModule],
})
export class AuthModule {}
