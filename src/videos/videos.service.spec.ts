import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { VideosService } from './videos.service';
import { VideoMock } from './mocks/video-mock';
import { UpdateVideoDTO } from './dto/update-video.dto';
import { CreateVideoDTO } from './dto/create-video.dto';

describe('Videos Service', () => {
    let service: VideosService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                VideosService,
                {
                    provide: getModelToken('Video'),
                    useValue: VideoMock,
                }],
        }).compile();

        service = module.get<VideosService>(VideosService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getById', () => {
        it('should return an element by Id', async () => {
            const fake = '1';
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'getById').mockImplementation(() => Promise.resolve(result));
            expect(await service.getById(fake)).toBe(result);
        });
    });

    describe('getAll', () => {
        it('should return an array of videos', async () => {
            const result = [{ name: 'VideoTest1' }, { name: 'VideoTest2' }];
            jest.spyOn(service, 'getAll').mockImplementation(() => result);
            expect(await service.getAll()).toBe(result);
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
            expect(await service.create(fake)).toBe(result);
        });
    });

    describe('update', () => {
        it('should update a video', async () => {
            const fake: UpdateVideoDTO = {
                title: 'Video',
                description: 'Test',
                URL: '',
                posterURL: '',
                duration: 1,
            };
            const id = '1';
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve(result));
            expect(await service.update(id, fake)).toBe(result);
        });
    });

    describe('delete', () => {
        it('should delete a video', async () => {
            const fake = '1';
            const result = { name: 'VideoTest' };
            jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(result));
            expect(await service.delete(fake)).toBe(result);
        });
    });
});
