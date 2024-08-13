import * as yup from 'yup';

export const createCategory = yup.object().shape({
    name: yup.string().required("Name is required"),
  });