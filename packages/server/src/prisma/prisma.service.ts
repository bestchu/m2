import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
  Logger,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { PrismaClient } from '@prisma/client';
export let prismaClient: PrismaService;
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  @Inject(REQUEST)
  private request: Request;
  async onModuleInit() {
    await this.$connect().then(() => {
      this.logger.log('database connect');
    });
    prismaClient = this;
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
