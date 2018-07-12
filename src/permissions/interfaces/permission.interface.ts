import { Document } from 'mongoose';

export interface Permission extends Document {
  readonly name: string;
}