import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { VideoService } from './video.service';
import { CreateVideoDTO } from './dto/create-video.dto';
import { UpdateVideoDTO } from './dto/update-video.dto';
import { AlreadyExistingException } from '@exceptions/already-existing.exception';
import { ValidationException } from '@exceptions/validation.exception';

@Controller('videos')
export class VideoController {

    constructor(private readonly videoService: VideoService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const video = await this.videoService.findById(id);
        if (!video) {
            throw new NotFoundException();
        }
        return video;
    }

    @Get('/title/:title')
    async getByTitle(@Param('title') title: string) {
        const videos = await this.videoService.findByTitle(title);
        if (videos.length === 0) {
            throw new NotFoundException();
        }
        return videos;
    }

    @Get()
    async getAll() {
        return await this.videoService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateVideoDTO) {
        return await this.videoService.create(dto).catch((err) => {
            if (err.name === 'ValidationError') {
                throw new ValidationException(err.errors);
            }
            if (err.errmsg.includes('duplicate key error')) {
                const name = err.errmsg.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
        });
    }

    @Put()
    async update(@Body() dto: UpdateVideoDTO) {
        const result = await this.videoService.update(dto).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.videoService.delete(id).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
