import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  const mongoUrl = process.env.DB_URL;

  try {
    await mongoose.connect(mongoUrl, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 40000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
