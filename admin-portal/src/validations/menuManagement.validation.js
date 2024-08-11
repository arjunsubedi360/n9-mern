import * as yup from 'yup';

export const createMenu = yup.object().shape({
    name: yup.string().required("Name is required"),
    image: yup.string().required("Status is required"),
  });