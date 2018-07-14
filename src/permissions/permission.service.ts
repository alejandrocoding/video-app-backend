import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Permission } from './interfaces/permission.interface';
import { CreatePermissionDTO } from './dto/create-permission.dto';
import { UpdatePermissionDTO } from './dto/update-permission.dto';

@Injectable()
export class PermissionService {
    constructor(@InjectModel('Permission') private readonly permissionModel: Model<Permission>) { }

    async findById(id: string): Promise<Permission> {
        return await this.permissionModel.findById(id).exec();
    }

    async findByName(name: string): Promise<Permission> {
        return await this.permissionModel.findOne({ name });
    }

    async findAll(): Promise<Permission[]> {
        return await this.permissionModel.find().exec();
    }

    async create(dto: CreatePermissionDTO): Promise<Permission> {
        const role = new this.permissionModel(dto);
        return await role.save();
    }

    async update(dto: UpdatePermissionDTO): Promise<Permission> {
        const id = dto.id;
        return await this.permissionModel.findByIdAndUpdate(id , { ...dto }).exec();
    }

    async delete(id: string): Promise<Permission> {
        return await this.permissionModel.findByIdAndRemove(id).exec();
    }
}
