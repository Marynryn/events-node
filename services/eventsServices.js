import { Event } from "../model/eventModel.js";

export const getEventsList = () => Event.find();

export const getEventById = (id) => Event.findOne({ _id: id });

export const signup = async (id, body) => {
  const event = await Event.findOneAndUpdate({ _id: id }, body, { new: true });

  return event.participants;
};
export const checkUserExists = async (filter) => {
  const userExists = await Event.participant.exists(filter);
  return userExists;
};

export * as eventsServices from "./eventsServices.js";
