import mongoose from "mongoose";

export const mongoConnect = () => {
  try {
    const connection = process.env.MONGO_URL;
    const conn = mongoose.connect(connection);
    conn && console.log("Mongo DB Connected");
  } catch (error) {}
};
