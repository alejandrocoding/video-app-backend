import * as mongoose from 'mongoose';
import { setIDSchema } from '@utils/id-parser';

export const RoleSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  permissionsId: {
    type: [String], validate: {
      validator: (array: string[]) => {
        return array.length > 0;
      },
    },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { versionKey: false, timestamps: true });

setIDSchema(RoleSchema);