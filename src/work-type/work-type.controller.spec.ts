import { Test, TestingModule } from '@nestjs/testing';
import { WorkTypeController } from './work-type.controller';

describe('WorkTypeController', () => {
  let controller: WorkTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkTypeController],
    }).compile();

    controller = module.get<WorkTypeController>(WorkTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
