import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { VideosService } from './videos.service';
import { VideoMock } from './mocks/video-mock';

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
});
