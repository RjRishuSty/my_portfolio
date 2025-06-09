import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/My_Portfolio");
    console.log("MongoDB connection successfully.");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
