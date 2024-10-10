// models/cart.model.ts
import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // assuming you have a User model
    required: true,
  },
  furnitureItems: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'furniture', // assuming you have a Furniture model
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
export default Cart;
