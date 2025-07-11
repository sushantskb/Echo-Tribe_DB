import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db.js";
import User from "./models/user.model.js";
import Otp from "./models/otp.model.js";
import Event from "./models/event.model.js";
import { Booking } from "./models/booking.model.js";
connectDB();

export { connectDB, User, Otp, Event, Booking };
