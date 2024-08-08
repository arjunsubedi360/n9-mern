import Joi from "joi";
import { UserStatusEnum } from "../enums/user-status.enum.js";
import { phoneSchema } from "./schemas";

const createUser = Joi.object({
  fullName: Joi.string().required().label("Full Name"),
  phone: phoneSchema.label("Phone"),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label("Email"),
  status: Joi.string()
    .optional()
    .label("Status")
    .valid(...Object.keys(UserStatusEnum)),
  password: Joi.string().required().label("Password")
});

const updateUser = Joi.object({
  fullName: Joi.string().label("Full Name"),
  phone: Joi.string().required().label("Phone"),
  email: Joi.string().label("Email"),
  status: Joi.string()
    .label("Status").optional()
    .valid(...Object.keys(UserStatusEnum)),
});



export { createUser, updateUser };
