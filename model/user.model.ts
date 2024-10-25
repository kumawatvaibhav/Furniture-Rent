// user.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IRentedFurniture } from './RentedFurniture.model';
import Furniture from './furniture.model'

export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserProfile extends IUser {
  name?: string;
  avatar?: string;
  address?: string;
  phone?: string;
  rentedFurniture?: IRentedFurniture[];
  pastOrders? : [];
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    address: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
