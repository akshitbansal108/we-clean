import { Document } from 'mongoose';

export interface IUser extends Document {
  user_id: string;
  username: string;
  email: string;
  password: string;
  location: string
}
