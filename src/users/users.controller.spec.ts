import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserMock } from './mocks/user-mock';

describe('Users Controller', () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                UsersService,
                {
                    provide: getModelToken('User'),
                    useValue: UserMock,
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });

    describe('getById', () => {
        it('should return an element by Id', async () => {
            const fake = '1';
            const result = { name: 'UserTest' };
            jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
            expect(await controller.getById(fake)).toBe(result);
        });
    });

    describe('getAll', () => {
        it('should return an array of users', async () => {
            const result = [{ name: 'UserTest1' }, { name: 'UserTest2' }];
            jest.spyOn(service, 'getAll').mockImplementation(() => result);
            expect(await controller.getAll()).toBe(result);
        });
    });

    describe('create', () => {
        it('should create a user', async () => {
            const fake: CreateUserDTO = {
                firstName: 'User',
                lastName: 'Test',
                email: 'user@test.com',
                isVerified: true,
                roleId: '1',
            };
            const result = { name: 'UserTest' };
            jest.spyOn(service, 'create').mockImplementation(() => Promise.resolve(result));
            expect(await controller.create(fake)).toBe(result);
        });
    });

    describe('update', () => {
        it('should update a user', async () => {
            const fake: UpdateUserDTO = {
                firstName: 'User',
                lastName: 'Test',
                isVerified: true,
                roleId: '1',
                videosId: [],
            };
            const id = '1';
            const result = { name: 'UserTest' };
            jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve(result));
            expect(await controller.update(fake)).toBe(result);
        });
    });

    describe('delete', () => {
        it('should delete a user', async () => {
            const fake = '1';
            const result = { name: 'UserTest' };
            jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(result));
            expect(await controller.delete(fake)).toBe(result);
        });
    });
});
