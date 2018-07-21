import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async create(dto: CreateUserDTO): Promise<User> {
        const user = new this.userModel(dto);
        return await user.save();
    }

    async update(dto: UpdateUserDTO): Promise<User> {
        const id = dto.id;
        return await this.userModel.findByIdAndUpdate(id, { ...dto }).exec();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id).exec();
    }
}
