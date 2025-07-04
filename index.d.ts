import { Model } from "mongoose";
import { IUser } from "./models/user.model";
import { IOtp } from "./models/otp.model";
export function connectDB(): Promise<void>;
export const User: Model<IUser>;
export const Otp: Model<IOtp>;
