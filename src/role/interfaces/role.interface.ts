import { Document } from 'mongoose';

export interface Role extends Document {
  readonly name: string;
  readonly permissionsId: string[];
  readonly createdBy: string;
  readonly createdAt: Date;
}