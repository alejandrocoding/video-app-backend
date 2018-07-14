import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly isVerified: boolean;
  readonly roleId: string;
  readonly videosId: string[];
  readonly createdAt: Date;
}
