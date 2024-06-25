import Joi from "joi";

export const login = Joi.object({
    email: Joi.string().min(2).max(5).required().label("Name"),
    password:  Joi.string().required().label("Password"),
  });