import * as mongoose from 'mongoose';
import { setIDSchema } from '@utils/id-parser';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  isVerified: Boolean,
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  videosId: { type: [mongoose.Schema.Types.ObjectId], ref: 'Video' },
}, { versionKey: false, timestamps: true });

setIDSchema(UserSchema);