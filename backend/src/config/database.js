import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Atlas successfully connected!");
  } catch (error) {
    console.error("Error while connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
