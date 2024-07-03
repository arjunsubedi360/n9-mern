import Joi from "joi";

export const login = Joi.object({
  email: Joi.string().min(2).max(30).required().label("Email"),
  password: Joi.string().min(2).max(50).required().label("Password"),
});

