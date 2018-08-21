import * as mongoose from 'mongoose';
import { setIDSchema } from '@utils/id-parser';

export const PermissionSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
}, { versionKey: false, timestamps: true });

setIDSchema(PermissionSchema);