import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewURLParser: true });
    console.log("database connected...");
  } catch (error) {
    console.log(error.message);
  }
};
