import * as eventsServices from "../services/eventsServices.js";
import { catchAsync } from "../helpers/catchAsync.js";

export const getAllEvents = catchAsync(async (req, res) => {
  const events = await eventsServices.getEventsList();
  res.status(200).json(events);
});
export const getOneEvent = catchAsync(async (req, res) => {
  const eventById = await eventsServices.getEventById(req.params.id);
  if (!eventById) {
    return res.status(404).json({
      msg: "Not found..",
    });
  } else {
    res.status(200).json(eventById.participants);
  }
});

export const signup = catchAsync(async (req, res) => {
  const participants = req.body;

  const result = await eventsServices.signup(
    req.params.id,

    { participants },
    { new: true }
  );
  if (!result) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  res.status(200).json(result);
});
