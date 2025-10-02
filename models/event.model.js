import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    eventImage: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
    },
    ageGroup: {
      type: String,
    },
    fromDate: {
      type: Date,
    },
    toDate: {
      type: Date,
    },
    fromTime: {
      type: String,
    },
    toTime: {
      type: String,
    },
    location: {
      type: String,
    },
    price: [
      {
        type: {
          type: String,
        },
        price: {
          type: Number,
        },
        seats: {
          type: Number,
        },
      },
    ],
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    trending: {
      type: Boolean,
      default: false,
    },
    ratings: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
