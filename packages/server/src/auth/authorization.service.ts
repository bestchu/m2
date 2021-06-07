import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PrismaService } from '../prisma';
import { PasswordService } from '../common/services/password.service';

@Injectable()
export class AuthorizationService implements OnModuleInit {
  // private catsFactory: CatsFactory;
  @Inject(ModuleRef)
  private moduleRef: ModuleRef;
  @Inject(PrismaService)
  private prisma: PrismaService;
  @Inject(PasswordService)
  private passwordService: PasswordService;

  async onModuleInit() {
    // 在应用程序中搜索注册的账号认证服务
    // https://docs.nestjs.com/fundamentals/module-ref
    // this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}
