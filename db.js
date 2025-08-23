import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  console.log("URI", mongoURI);
  try {
    await mongoose.connect(mongoURI, {
      dbName: "production",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
