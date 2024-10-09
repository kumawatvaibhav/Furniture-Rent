import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICartItem {
  item: Types.ObjectId;        // Reference to Furniture model
  quantity: number;            // Quantity of the item
}

export interface ICart extends Document {
  user: Types.ObjectId;        // Reference to User model
  furnitureItems: ICartItem[]; // Array of cart items
}

const CartItemSchema: Schema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: 'Furniture', required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const CartSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    furnitureItems: [CartItemSchema],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
