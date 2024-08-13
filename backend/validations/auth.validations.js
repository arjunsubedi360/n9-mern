import Joi from "joi";

export const loginValidation = Joi.object({
  email: Joi.string().min(2).max(30).required().label("Email"),
  password: Joi.string().min(2).max(50).required().label("Password"),
});

export const registerValidation = Joi.object({
  name: Joi.string().min(2).max(30).required().label("Name"),
  email: Joi.string().min(2).max(50).required().label("Email"),
  age: Joi.number().min(2).max(50).required().label("Age"),
  isMarried: Joi.boolean(),
  role: Joi.string().min(2).max(50).required().label("Role"),
  password: Joi.string().min(2).max(50).required().label("Password"),
});
