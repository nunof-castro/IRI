import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: false,
    },
    event: {
      type: String,
      required: true,
      trim: true,
    },
    speakers: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
