import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().min(2).max(10).required().label("Name")
  });