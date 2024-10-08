import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  user: Types.ObjectId;  // Reference to the User
  items: { item: Types.ObjectId, quantity: number }[];  // Reference to Furniture items and their quantities
  totalPrice: number;
  status: string;  // Pending, Completed, Canceled, etc.
}

const OrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        item: { type: Schema.Types.ObjectId, ref: 'Furniture', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
