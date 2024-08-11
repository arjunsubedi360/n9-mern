import * as yup from 'yup';

export const createUser = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    role: yup.string().required("Role is required"),
    status: yup.string().required("Status is required"),
  });