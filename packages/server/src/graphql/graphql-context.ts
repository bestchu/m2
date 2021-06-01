import { PrismaClient } from '../prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Request } from '@nestjs/common';
export interface Context {
  prisma: PrismaClient;
  request: Request;
}

export function createContext(request: any): Context {
  const context = { ...request };
  if (this instanceof PrismaService) {
    context.prisma = this;
  } else {
    context.prisma = new PrismaClient();
  }
  return context;
}
