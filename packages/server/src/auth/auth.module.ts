import { Global, HttpModule, Module } from '@nestjs/common';
import * as Services from './services';
import * as Resolvers from './resolvers';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './services/jwt-config.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards';

@Global()
@Module({
  imports: [
    HttpModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  controllers: [AuthController],
  providers: [
    ...Object.values(Services),
    ...Object.values(Resolvers),
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [...Object.values(Services), JwtModule],
})
export class AuthModule {}
