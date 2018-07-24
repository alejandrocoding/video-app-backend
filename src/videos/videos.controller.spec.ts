import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { CreateVideoDTO } from './dto/create-video.dto';
import { UpdateVideoDTO } from './dto/update-video.dto';
import { VideoMock } from './mocks/video-mock';

describe('Videos Controller', () => {
    let controller: VideosController;
    let service: VideosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [VideosController],
            providers: [
                VideosService,
                {
                    provide: getModelToken('Video'),
                    useValue: VideoMock,
                },
            ],
        }).compile();

        controller = module.get<VideosController>(VideosController);
        service = module.get<VideosService>(VideosService);
    });

    describe('getById', () => {
        it('should return an element by Id', async () => {
            const fake = '1';
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
            expect(await controller.getById(fake)).toBe(result);
        });
    });

    describe('getAll', () => {
        it('should return an array of videos', async () => {
            const result = [{ name: 'VideoTest1' }, { name: 'VideoTest2' }];
            jest.spyOn(service, 'getAll').mockImplementation(() => result);
            expect(await controller.getAll()).toBe(result);
        });
    });

    describe('create', () => {
        it('should create a video', async () => {
            const fake: CreateVideoDTO = {
                title: 'Video',
                description: 'Test',
                URL: '',
                posterURL: '',
                duration: 1,
                createdBy: '',
            };
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'create').mockImplementation(() => Promise.resolve(result));
            expect(await controller.create(fake)).toBe(result);
        });
    });

    describe('update', () => {
        it('should update a video', async () => {
            const fake: UpdateVideoDTO = {
                id: '1',
                title: 'Video',
                description: 'Test',
                URL: '',
                posterURL: '',
                duration: 1,
            };
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve(result));
            expect(await controller.update(fake)).toBe(result);
        });
    });

    describe('delete', () => {
        it('should delete a video', async () => {
            const fake = '1';
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(result));
            expect(await controller.delete(fake)).toBe(result);
        });
    });
});
