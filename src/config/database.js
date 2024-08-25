import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  const mongoUrl = process.env.DB_URL;

  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
