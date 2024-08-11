import Joi from "joi";

const createMenuSchema = Joi.object({
  name: Joi.string().required().label("Name"),
  image: Joi.string().required().label("Image"),
});

const updateMenu = Joi.object({
  name: Joi.string().required().label("Name"),
  image: Joi.string().required().label("Image"),
});

export { createMenuSchema, updateMenu };
