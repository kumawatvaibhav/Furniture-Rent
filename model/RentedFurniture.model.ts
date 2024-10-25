// models/RentedFurniture.model.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IRentedFurniture extends Document {
  _id: string;
  name: string;
  image?: string;
  rentedSince: Date;
}

const rentedFurnitureSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  image: { type: String },
  rentedSince: { type: Date, required: true },
}, { timestamps: true });

const RentedFurniture = mongoose.models.RentedFurniture || mongoose.model<IRentedFurniture>('RentedFurniture', rentedFurnitureSchema);

export default RentedFurniture; 
