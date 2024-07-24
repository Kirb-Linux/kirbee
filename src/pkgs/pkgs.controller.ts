import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Pkgs } from '@prisma/client';

@Controller('pkgs')
export class PkgsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('/:name')
  async getPkgById(@Param('name') pkgname: string): Promise<Pkgs> {
    return this.prismaService.pkgs.findUnique({
      where: {
        name: pkgname,
      },
    });
  }

  @Post('/new')
  async allPkg(
    @Body()
    pkgData: {
      name: string;
      cloneurl: string;
      installscript: string;
      filename: string;
      workdir: string;
      checksum: string;
    },
  ): Promise<Pkgs> {
    const { name, cloneurl, installscript, filename, workdir, checksum } =
      pkgData;
    return this.prismaService.pkgs.create({
      data: {
        name: name,
        cloneurl: cloneurl,
        installscript: installscript,
        filename: filename,
        workdir: workdir,
        checksum: checksum,
      },
    });
  }
}
