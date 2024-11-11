import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log("Database Not Connected", err);
  }
};

DB();

export default mongoose;
