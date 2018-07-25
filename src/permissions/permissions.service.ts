import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Permission } from './interfaces/permission.interface';
import { CreatePermissionDTO } from './dto/create-permission.dto';
import { UpdatePermissionDTO } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {

    constructor(@InjectModel('Permission') private readonly permissionModel: Model<Permission>) { }

    async getById(id: string): Promise<Permission> {
        return await this.permissionModel.findById(id).exec();
    }

    async getByName(name: string): Promise<Permission> {
        return await this.permissionModel.findOne({ name });
    }

    async getAll(): Promise<Permission[]> {
        return await this.permissionModel.find().exec();
    }

    async create(dto: CreatePermissionDTO): Promise<Permission> {
        const role = new this.permissionModel(dto);
        return await role.save();
    }

    async update(id: string, dto: UpdatePermissionDTO): Promise<Permission> {
        return await this.permissionModel.findByIdAndUpdate(id, { ...dto }).exec();
    }

    async delete(id: string): Promise<Permission> {
        return await this.permissionModel.findByIdAndRemove(id).exec();
    }
}
