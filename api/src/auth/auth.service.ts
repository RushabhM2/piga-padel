import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async sendCode(phone: string) {
    const user = await this.prisma.user.upsert({
      where: { phone },
      update: {},
      create: { phone },
    });

    // TODO: generate OTP, store hash, send via SMS
    return { userId: user.id };
  }
}
