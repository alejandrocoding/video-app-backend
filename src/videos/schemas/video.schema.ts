import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  URL: String,
  posterURL: String,
  duration: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});