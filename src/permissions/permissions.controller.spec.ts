import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDTO } from './dto/create-permission.dto';
import { UpdatePermissionDTO } from './dto/update-permission.dto';
import { PermissionMock } from './mocks/permission-mock';

describe('Permissions Controller', () => {
    let controller: PermissionsController;
    let service: PermissionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PermissionsController],
            providers: [
                PermissionsService,
                {
                    provide: getModelToken('Permission'),
                    useValue: PermissionMock,
                },
            ],
        }).compile();

        controller = module.get<PermissionsController>(PermissionsController);
        service = module.get<PermissionsService>(PermissionsService);
    });

    describe('getById', () => {
        it('should return an element by Id', async () => {
            const fake = '1';
            const result = { name: 'PermissionTest' };
            jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
            expect(await controller.getById(fake)).toBe(result);
        });
    });

    describe('getByName', () => {
        it('should return an element by Name', async () => {
            const fake = 'PermissionTest';
            const result = { name: 'PermissionTest' };
            jest.spyOn(service, 'getByName').mockImplementation(() => result);
            expect(await controller.getByName(fake)).toBe(result);
        });
    });

    describe('getAll', () => {
        it('should return an array of permissions', async () => {
            const result = [{ name: 'PermissionTest1' }, { name: 'PermissionTest2' }];
            jest.spyOn(service, 'getAll').mockImplementation(() => result);
            expect(await controller.getAll()).toBe(result);
        });
    });

    describe('create', () => {
        it('should create a permission', async () => {
            const fake: CreatePermissionDTO = { name: 'PermissionTest' };
            const result = { name: 'PermissionTest' };
            jest.spyOn(service, 'create').mockImplementation(() => Promise.resolve(result));
            expect(await controller.create(fake)).toBe(result);
        });
    });

    describe('update', () => {
        it('should update a permission', async () => {
            const fake: UpdatePermissionDTO = { id: '1', name: 'PermissionTest' };
            const result = { name: 'PermissionTest' };
            jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve(result));
            expect(await controller.update(fake)).toBe(result);
        });
    });

    describe('delete', () => {
        it('should delete a permission', async () => {
            const fake = '1';
            const result = { name: 'PermissionTest' };
            jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(result));
            expect(await controller.delete(fake)).toBe(result);
        });
    });
});
