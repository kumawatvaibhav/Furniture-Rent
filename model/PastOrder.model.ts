import mongoose from 'mongoose';

const pastOrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  total: { type: String, required: true },
});

export default mongoose.models.PastOrder || mongoose.model('PastOrder', pastOrderSchema);
