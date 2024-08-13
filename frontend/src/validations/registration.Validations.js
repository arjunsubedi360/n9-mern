import * as Yup from "yup";

export const registerValidation = Yup.object({
name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  role: Yup.string().oneOf(['admin','user']).required().label('Role')
});