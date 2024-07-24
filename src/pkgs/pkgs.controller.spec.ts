import { Test, TestingModule } from '@nestjs/testing';
import { PkgsController } from './pkgs.controller';

describe('PkgsController', () => {
  let controller: PkgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkgsController],
    }).compile();

    controller = module.get<PkgsController>(PkgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
