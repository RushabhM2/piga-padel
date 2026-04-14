import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Jambo Piga Padel!';
  }

  async getDbStatus() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { status: 'ok' };
  }
}
