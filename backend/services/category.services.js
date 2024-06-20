import Category from "../models/Category.js";

export const createSingleCategory = async (payload) => {
  return await Category.create(payload);
};

export const getSingleCategory = async ({ id }) => {
  return await Category.findOne({ _id: id });
};

export const updateSingleCategory = async ({ id, input }) => {
  return await Category.updateOne({ _id: id }, input);
};

export const deleteSingleCategory = async (id) => {
  return await Category.deleteOne({ _id: id });
};
