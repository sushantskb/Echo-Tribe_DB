import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    required: true,
  },
  persons: [
    {
      type: {
        type: String,
        count: Number,
      },
    },
  ],
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
