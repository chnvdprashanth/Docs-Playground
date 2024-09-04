import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectMongoDB = async () => {
    console.log("Mongodb Connected");
  return mongoose.connect(`${process.env.MONGODB_URI}`);
};
