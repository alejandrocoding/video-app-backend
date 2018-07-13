import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  permissions: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});