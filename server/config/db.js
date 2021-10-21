import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");

export const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};
