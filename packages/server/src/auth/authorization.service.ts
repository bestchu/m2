import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AuthorizationService implements OnModuleInit {
  // private catsFactory: CatsFactory;
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    // 在应用程序中搜索注册的账号认证服务
    // https://docs.nestjs.com/fundamentals/module-ref
    // this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}
