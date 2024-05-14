import HttpError from "../helpers/HttpError.js";

import { createParticipantSchema } from "../schemas/participantSchemas.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    console.log(req.body);
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export const validateCreateParticipantBody = validateBody(
  createParticipantSchema
);
