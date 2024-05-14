import Joi from "joi";

export const createParticipantSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date().required(),
  about_us: Joi.string().required(),
});
