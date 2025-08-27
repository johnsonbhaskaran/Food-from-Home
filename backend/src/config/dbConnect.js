import mongoose from "mongoose";
import "dotenv/config.js";

const dbConnect = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected:", mongoose.connection.host, mongoose.connection.name);
  } catch (err) {
    console.log("Database connection error: ", err);
  }
};
export default dbConnect;
