import mongoose, { Mongoose } from 'mongoose';

// Explicitly declare the mongoose cache type globally
declare global {
  var mongoose: { conn: Mongoose | null, promise: Promise<Mongoose> | null };
}

const MONGODB_URI = process.env.MONGO_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// If the cache doesn't exist, initialize it
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If connection exists in cache, return it
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  // If no cached promise exists, create one
  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Wait for the promise to resolve and cache the connection
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default dbConnect;
