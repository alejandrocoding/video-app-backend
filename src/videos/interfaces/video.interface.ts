import { Document } from 'mongoose';

export interface Video extends Document {
  readonly title: string;
  readonly description: string;
  readonly URL: string;
  readonly posterURL: string;
  readonly duration: number;
  readonly createdBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}