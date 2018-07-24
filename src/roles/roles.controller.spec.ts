import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';
import { RoleMock } from './mocks/role-mock';

describe('Roles Controller', () => {
  let controller: RolesController;
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        RolesService,
        {
          provide: getModelToken('Role'),
          useValue: RoleMock,
        },
      ],
    }).compile();

    controller = module.get<RolesController>(RolesController);
    service = module.get<RolesService>(RolesService);
  });

  describe('getById', () => {
    it('should return an element by Id', async () => {
      const fake = '1';
      const result = { name: 'RoleTest' };
      jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
      expect(await controller.getById(fake)).toBe(result);
    });
  });

  describe('getByName', () => {
    it('should return an element by Name', async () => {
      const fake = 'RoleTest';
      const result = { name: 'RoleTest' };
      jest.spyOn(service, 'getByName').mockImplementation(() => result);
      expect(await controller.getByName(fake)).toBe(result);
    });
  });

  describe('getAll', () => {
    it('should return an array of roles', async () => {
      const result = [{ name: 'RoleTest1' }, { name: 'RoleTest2' }];
      jest.spyOn(service, 'getAll').mockImplementation(() => result);
      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a role', async () => {
      const fake: CreateRoleDTO = { name: 'RoleTest', permissionsId: ['1'], createdBy: '1' };
      const result = { name: 'RoleTest' };
      jest.spyOn(service, 'create').mockImplementation(() => Promise.resolve(result));
      expect(await controller.create(fake)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a role', async () => {
      const fake: UpdateRoleDTO = { id: '1', name: 'RoleTest', permissionsId: ['1'] };
      const result = { name: 'RoleTest' };
      jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve(result));
      expect(await controller.update(fake)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete a role', async () => {
      const fake = '1';
      const result = { name: 'RoleTest' };
      jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(result));
      expect(await controller.delete(fake)).toBe(result);
    });
  });
});
