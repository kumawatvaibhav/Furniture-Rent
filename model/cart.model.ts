import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ICart extends Document {
  user: Types.ObjectId;  // Reference to the User
  furnitureItems: { item: Types.ObjectId, quantity: number }[];  // Reference to Furniture items and their quantities
}

const CartSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    furnitureItems: [
      {
        item: { type: Schema.Types.ObjectId, ref: 'Furniture', required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
