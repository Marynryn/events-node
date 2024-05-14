import express from "express";
import { validateCreateParticipantBody } from "../helpers/validateBody.js";

import {
  getAllEvents,
  getOneEvent,
  signup,
} from "../controllers/eventsControllers.js";
import { isIdValid } from "../middlewares/index.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id", isIdValid, getOneEvent);
eventsRouter.patch(
  "/:id/signup",
  isIdValid,
  validateCreateParticipantBody,
  signup
);

export default eventsRouter;
