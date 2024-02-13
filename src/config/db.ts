import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const mongoUri: string = process.env.MONGO_URI || "";

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errMsg: string = error.message;
      console.error(`Error: ${errMsg}`);
    } else {
      console.error("An unexpected error occurred!");
    }
    process.exit(1);
  }
};

export default connectDB;
