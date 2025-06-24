import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/testing1");
    console.log(`✅ MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
