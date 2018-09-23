import { Document } from 'mongoose';
import { PermissionTarget } from '../enums/permission-target.enum';

export interface Permission extends Document {
  readonly name: string;
  readonly target: PermissionTarget;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}