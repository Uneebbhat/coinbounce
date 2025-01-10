import mongoose from "mongoose";
import { MONGODB_URI } from "./constants";

const MONGO_URI = MONGODB_URI as string;

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log("Failed to connect to MongoDB");
  }
};

export default dbConnect;
