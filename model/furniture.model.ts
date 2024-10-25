import mongoose, { Document, Schema } from 'mongoose';

export interface IFurniture extends Document {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  available?: boolean;
  startDate?: Date;
  endDate?: Date;
  total?: number;
}

const FurnitureSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Furniture = mongoose.models.Furniture || mongoose.model<IFurniture>('Furniture', FurnitureSchema);

export default Furniture;
