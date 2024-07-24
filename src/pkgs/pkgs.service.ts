import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PkgsService {
  constructor(private prisma: PrismaService) {}
}
