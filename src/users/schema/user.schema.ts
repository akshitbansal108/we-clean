import * as mongoose from 'mongoose';
import { CityNameEnum } from 'src/enums/city-name.enum';

export const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true, enum: CityNameEnum }
});
