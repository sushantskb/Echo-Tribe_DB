import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db.js";
import User from "./models/user.model.js";
import Otp from "./models/otp.model.js";
connectDB();

export { connectDB, User, Otp };