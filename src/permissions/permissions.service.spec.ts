// import { Test, TestingModule } from '@nestjs/testing';
// import { getModelToken } from '@nestjs/mongoose';

// import { PermissionsService } from './permissions.service';
// import { PermissionMock } from './mocks/permission-mock';

// describe('PermissionsService', () => {
//   let service: PermissionsService;

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         PermissionsService,
//         {
//           provide: getModelToken('Permission'),
//           useValue: PermissionMock,
//         },
//       ],
//     }).compile();

//     service = module.get<PermissionsService>(PermissionsService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('getById', () => {
//     it('should return an element by Id', async () => {
//       const fake = '1';
//       const result = { name: 'PermissionTest' };
//       jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
//       expect(await service.getById(fake)).toBe(result);
//     });
//   });
// });
