import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AlreadyExistingException } from '@exceptions/already-existing.exception';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const user = await this.usersService.findById(id);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @Get('/email/:email')
    async getByName(@Param('email') email: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @Get()
    async getAll() {
        return await this.usersService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateUserDTO) {
        return await this.usersService.create(dto).catch((err) => {
            if (err.errmsg.includes('duplicate key error')) {
                const name = err.errmsg.match(/"(.*)"/)[0];
                throw new AlreadyExistingException(name);
            }
        });
    }

    @Put()
    async update(@Body() dto: UpdateUserDTO) {
        const result = await this.usersService.update(dto).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.usersService.delete(id).catch((err) => {
            throw new BadRequestException();
        });
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
