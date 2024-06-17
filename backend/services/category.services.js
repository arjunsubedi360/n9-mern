import Category from "../models/Category.js";

export const createSingleCategory = async (payload) => {
  return await Category.create(payload);
};

export const getSingleCategory = async ({ id }) => {
  return await Category.findOne({ _id: id });
};
