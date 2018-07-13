import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';
import { AlreadyExistingException } from '../exceptions/already-existing.exception';

@Controller('role')
export class RoleController {

    constructor(private readonly roleService: RoleService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const role = await this.roleService.findById(id);
        if (!role) {
            throw new NotFoundException();
        }
        return role;
    }

    @Get('/name/:name')
    async getByName(@Param('name') name: string) {
        const role = await this.roleService.findByName(name);
        if (!role) {
            throw new NotFoundException();
        }
        return role;
    }

    @Get()
    async getAll() {
        return await this.roleService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateRoleDTO) {
        return await this.roleService.create(dto).catch((err) => {
            if (err.errmsg.includes('duplicate key error')) {
                const name = err.errmsg.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
        });
    }

    @Put()
    async update(@Body() dto: UpdateRoleDTO) {
        const result = await this.roleService.update(dto).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.roleService.delete(id).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
