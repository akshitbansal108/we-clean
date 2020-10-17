import * as mongoose from 'mongoose';
import { CityNameEnum } from 'src/enums/city-name.enum';
import { ServiceCategoryEnum } from 'src/enums/service-category.enum';

export const ServiceSchema = new mongoose.Schema({
  service_id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  service_category: { type: String, required: true, enum: ServiceCategoryEnum },
  display_name: { type: String },
  location: { type: String, required: true, enum: CityNameEnum },
  aadhar_number: { type: String, required: true },
  phone_number: { type: String },
  address: { type: String, required: true }
});
