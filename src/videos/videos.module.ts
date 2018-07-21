import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { VideoSchema } from './schemas/video.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Video', schema: VideoSchema }])],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule { }
