import * as mongoose from 'mongoose';

export const PermissionSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
});