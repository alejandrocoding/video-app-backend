import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  isVerified: Boolean,
  roleId: String,
  createdAt: { type: Date, default: Date.now },
});
