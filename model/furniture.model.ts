import mongoose from 'mongoose';

const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false, // Optional if images aren't mandatory
  },
  available: {
    type: Boolean,
  }
}, { timestamps: true });

export default mongoose.models.Furniture || mongoose.model('Furniture', FurnitureSchema);
