import Joi from "joi";

export const createUser = Joi.object({
  name: Joi.string().min(2).max(50).required().label("Name"),
  email: Joi.string().min(2).max(30).required().label("Email"),
  age: Joi.number().min(2).max(30).required().label("Age"),
  isMarried: Joi.boolean().default(false).label("Is married"),
});

