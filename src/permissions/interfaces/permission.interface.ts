import { Document } from 'mongoose';
import { PermissionType } from '../enums/permission-type.enum';

export interface Permission extends Document {
  readonly name: string;
  readonly type: PermissionType;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}