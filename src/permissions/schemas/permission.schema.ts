import * as mongoose from 'mongoose';
import { setIDSchema } from '@utils/id-parser';
import { PermissionTarget } from '../enums/permission-target.enum';

const targets = [
  PermissionTarget.FullAccessVideos,
  PermissionTarget.ReadOnlyVideos,
  PermissionTarget.ManageUsers,
  PermissionTarget.ManageRoles,
  PermissionTarget.ManagePermissions,
];

export const PermissionSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  target: { type: String, enum: targets, required: true },
}, { versionKey: false, timestamps: true });

setIDSchema(PermissionSchema);