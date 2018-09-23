import * as mongoose from 'mongoose';

import { setIDSchema } from '@utils/id-parser';
import { PermissionType } from '../enums/permission-type.enum';

const types = [
  PermissionType.FullAccessVideos,
  PermissionType.ReadOnlyVideos,
  PermissionType.ManageUsers,
  PermissionType.ManageRoles,
  PermissionType.ManagePermissions,
];

export const PermissionSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  type: { type: String, enum: types, required: true },
}, { versionKey: false, timestamps: true });

setIDSchema(PermissionSchema);