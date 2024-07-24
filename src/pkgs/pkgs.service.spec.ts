import { Test, TestingModule } from '@nestjs/testing';
import { PkgsService } from './pkgs.service';

describe('PkgsService', () => {
  let service: PkgsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkgsService],
    }).compile();

    service = module.get<PkgsService>(PkgsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
