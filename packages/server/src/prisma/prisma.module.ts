import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
const prismaService = new PrismaService();
@Global()
@Module({
  providers: [
    {
      provide: PrismaService,
      useValue: prismaService,
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
