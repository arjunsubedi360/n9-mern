import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().min(2).max(5).required().label("Name")
  });

  