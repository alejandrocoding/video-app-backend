import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Video } from './interfaces/video.interface';
import { CreateVideoDTO } from './dto/create-video.dto';
import { UpdateVideoDTO } from './dto/update-video.dto';

@Injectable()
export class VideoService {

    constructor(@InjectModel('Video') private readonly videoModel: Model<Video>) { }

    async findById(id: string): Promise<Video> {
        return await this.videoModel.findById(id).exec();
    }

    async findByTitle(title: string): Promise<Video[]> {
        return await this.videoModel.find({ title }).exec();
    }

    async findAll(): Promise<Video[]> {
        return await this.videoModel.find().exec();
    }

    async create(dto: CreateVideoDTO): Promise<Video> {
        const video = new this.videoModel(dto);
        return await video.save();
    }

    async update(dto: UpdateVideoDTO): Promise<Video> {
        const id = dto.id;
        return await this.videoModel.findByIdAndUpdate(id , { ...dto }).exec();
    }

    async delete(id: string): Promise<Video> {
        return await this.videoModel.findByIdAndRemove(id).exec();
    }
}
