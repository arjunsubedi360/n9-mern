import Category from "../models/Category.js";

export const createSingleCategory = async (input) => {
  const data = await Category.create(input);
  return data;
};

export const createSingleCategory = async (payload) => {
  try {
    console.log({ payload });

    const data = await Category.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleCategory = async ({ name }) => {
  try {
    const data = await Category.findOne({ name });
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
