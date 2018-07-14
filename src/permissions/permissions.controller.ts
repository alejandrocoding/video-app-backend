import { Controller, Body, Param, Get, Post, Put, Delete, UseFilters } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { PermissionsService } from './permissions.service';
import { CreatePermissionDTO } from './dto/create-permission.dto';
import { UpdatePermissionDTO } from './dto/update-permission.dto';
import { AlreadyExistingException } from '../exceptions/already-existing.exception';
import { CastErrorException } from '../exceptions/cast-error.exception';
import { HttpExceptionFilter } from '../core/http-exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller('permissions')
export class PermissionsController {

    constructor(private readonly permissionsService: PermissionsService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const permission = await this.permissionsService.findById(id).catch((err) => {
            if (err.name === 'CastError') {
                throw new CastErrorException();
            }
        });
        if (!permission) {
            throw new NotFoundException();
        }
        return permission;
    }

    @Get('/name/:name')
    async getByName(@Param('name') name: string) {
        const permission = await this.permissionsService.findByName(name);
        if (!permission) {
            throw new NotFoundException();
        }
        return permission;
    }

    @Get()
    async getAll() {
        return await this.permissionsService.findAll();
    }

    @Post()
    async create(@Body() dto: CreatePermissionDTO) {
        return await this.permissionsService.create(dto).catch((err) => {
            if (err.errmsg.includes('duplicate key error')) {
                const name = err.errmsg.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
        });
    }

    @Put()
    async update(@Body() dto: UpdatePermissionDTO) {
        const result = await this.permissionsService.update(dto).catch(() => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.permissionsService.delete(id).catch(() => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
