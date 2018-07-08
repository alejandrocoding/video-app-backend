import { Controller, Get, Param, Post, Body, Delete, NotFoundException } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/create-role.dto';

@Controller('role')
export class RoleController {

    constructor(private readonly roleService: RoleService) { }

    @Get(':id')
    async getVyId(@Param('id') id) {
        return await this.roleService.findById(id);
    }

    @Get()
    async getAll() {
        return await this.roleService.findAll();
    }

    @Post()
    async create(@Body() roleDTO: CreateRoleDTO) {
        return await this.roleService.create(roleDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        const removed = await this.roleService.delete(id);
        if (removed) {
            return removed;
        }
        throw new NotFoundException();
    }
}
