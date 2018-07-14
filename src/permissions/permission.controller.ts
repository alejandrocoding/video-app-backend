import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { PermissionService } from './permission.service';
import { CreatePermissionDTO } from './dto/create-permission.dto';
import { UpdatePermissionDTO } from './dto/update-permission.dto';
import { AlreadyExistingException } from '../exceptions/already-existing.exception';

@Controller('permissions')
export class PermissionController {

    constructor(private readonly permissionService: PermissionService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const permission = await this.permissionService.findById(id);
        if (!permission) {
            throw new NotFoundException();
        }
        return permission;
    }

    @Get('/name/:name')
    async getByName(@Param('name') name: string) {
        const permission = await this.permissionService.findByName(name);
        if (!permission) {
            throw new NotFoundException();
        }
        return permission;
    }

    @Get()
    async getAll() {
        return await this.permissionService.findAll();
    }

    @Post()
    async create(@Body() dto: CreatePermissionDTO) {
        return await this.permissionService.create(dto).catch((err) => {
            if (err.errmsg.includes('duplicate key error')) {
                const name = err.errmsg.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
        });
    }

    @Put()
    async update(@Body() dto: UpdatePermissionDTO) {
        const result = await this.permissionService.update(dto).catch(() => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.permissionService.delete(id).catch(() => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
