import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';
import { AlreadyExistingException } from '@exceptions/already-existing.exception';
import { UpdateRolePermissionsDTO } from '@roles/dto/update-role-permissions.dto';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const role = await this.rolesService.getById(id);
        if (!role) {
            throw new NotFoundException();
        }
        return role;
    }

    @Get('/name/:name')
    async getByName(@Param('name') name: string) {
        const role = await this.rolesService.getByName(name);
        if (!role) {
            throw new NotFoundException();
        }
        return role;
    }

    @Get()
    async getAll() {
        return await this.rolesService.getAll();
    }

    @Post()
    async create(@Body() dto: CreateRoleDTO) {
        return await this.rolesService.create(dto).catch((err) => {
            if (err.message.includes('duplicate key error')) {
                const name = err.message.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
            if (err.message.includes('permissionsId') && err.message.includes('validation failed')) {
                throw new BadRequestException('PermissionId Field is not as expected');
            }
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateRoleDTO) {
        const result = await this.rolesService.update(id, dto).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Put(':id/permissions')
    async updatePermissions(@Param('id') id: string, @Body() dto: UpdateRolePermissionsDTO) {
        const result = await this.rolesService.updatePermissions(id, dto).catch((err) => {
            if (err.message.includes('permissionsId')) {
                throw new BadRequestException('PermissionId Field is not as expected');
            }
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.rolesService.delete(id).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
