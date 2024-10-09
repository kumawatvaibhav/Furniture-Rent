import mongoose from 'mongoose';

const rentedFurnitureSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  image: { type: String },
  rentedSince: { type: Date, required: true },
});

export default mongoose.models.RentedFurniture || mongoose.model('RentedFurniture', rentedFurnitureSchema);
