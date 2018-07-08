import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './interfaces/role.interface';
import { CreateRoleDTO } from './dto/create-role.dto';

@Injectable()
export class RoleService {

    constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) { }

    async findById(id: string): Promise<Role> {
        return await this.roleModel.findById(id).exec();
    }

    async findAll(): Promise<Role[]> {
        return await this.roleModel.find().exec();
    }

    async create(dto: CreateRoleDTO): Promise<Role> {
        const role = new this.roleModel();
        role.name = dto.name;
        role.permissionsId = dto.permissions;
        role.createdBy = dto.createdBy;
        return await role.save();
    }

    async delete(id: string): Promise<Role> {
        return await this.roleModel.findByIdAndRemove(id);
    }
}
