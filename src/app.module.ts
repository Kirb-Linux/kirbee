import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PkgsService } from './pkgs/pkgs.service';
import { PkgsController } from './pkgs/pkgs.controller';

@Module({
  imports: [],
  controllers: [AppController, PkgsController],
  providers: [AppService, PrismaService, PkgsService],
})
export class AppModule {}
