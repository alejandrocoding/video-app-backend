import * as mongoose from 'mongoose';
import { setIDSchema } from '@utils/id-parser';

export const VideoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  URL: String,
  posterURL: String,
  duration: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { versionKey: false, timestamps: true });

setIDSchema(VideoSchema);