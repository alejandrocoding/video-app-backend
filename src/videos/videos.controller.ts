import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { VideosService } from './videos.service';
import { CreateVideoDTO } from './dto/create-video.dto';
import { UpdateVideoDTO } from './dto/update-video.dto';
import { AlreadyExistingException } from '@exceptions/already-existing.exception';
import { ValidationException } from '@exceptions/validation.exception';

@Controller('videos')
export class VideosController {

    constructor(private readonly videosService: VideosService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const video = await this.videosService.getById(id);
        if (!video) {
            throw new NotFoundException();
        }
        return video;
    }

    @Get('/title/:title')
    async getByTitle(@Param('title') title: string) {
        const videos = await this.videosService.getByTitle(title);
        if (videos.length === 0) {
            throw new NotFoundException();
        }
        return videos;
    }

    @Get()
    async getAll() {
        return await this.videosService.getAll();
    }

    @Post()
    async create(@Body() dto: CreateVideoDTO) {
        return await this.videosService.create(dto).catch((err) => {
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
    async update(@Param('id') id: string, @Body() dto: UpdateVideoDTO) {
        const result = await this.videosService.update(id, dto).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.videosService.delete(id).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
