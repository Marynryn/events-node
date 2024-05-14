import { model, Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    event_date: {
      type: Date,
    },
    organizer: {
      type: String,
    },
    participants: [],
  },
  { versionKey: false }
);

const Event = model("event", eventSchema, "events");

export { Event };
