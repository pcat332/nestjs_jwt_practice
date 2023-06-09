import { Test, TestingModule } from '@nestjs/testing';
import { GetUserController } from './get-user.controller';

describe('GetUserController', () => {
  let controller: GetUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUserController],
    }).compile();

    controller = module.get<GetUserController>(GetUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
