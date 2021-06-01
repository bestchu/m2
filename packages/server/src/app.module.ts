import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule,
    CommonModule,
    PrismaModule,
    GraphqlModule,
    // ModulesModule,
    AuthModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
