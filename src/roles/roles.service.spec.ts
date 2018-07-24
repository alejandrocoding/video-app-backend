import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { RolesService } from './roles.service';
import { RoleMock } from './mocks/role-mock';

describe('Roles Service', () => {
    let service: RolesService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RolesService,
                {
                    provide: getModelToken('Role'),
                    useValue: RoleMock,
                }],
        }).compile();

        service = module.get<RolesService>(RolesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
