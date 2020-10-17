import { Document } from 'mongoose';

export interface IService extends Document {
  service_id: string;
  username: string;
  email: string;
  password: string;
  service_category: string;
  display_name: string;
  location: string;
  aadhar_number: string;
  phone_number: string;
  address: string;
}
