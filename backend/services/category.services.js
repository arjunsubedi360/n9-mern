import Category from "../models/Category.js";

export const createSingleCategory = async (payload) => {
  try {
    console.log({ payload });

    const data = await Category.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleCategory = async (id) => {
  const data = await Category.findOne({ _id: id });
  console.log(data);
  return data;
};
