import Joi from "joi";

export const createProduct = Joi.object({
  title: Joi.string().min(2).max(50).required().label("Title"),
  price: Joi.number().min(50).max(100000).required().label("Price"),
  categoryId: Joi.string().label("CategoryId"),
});

