import Category from "../models/Category.js";

export const createSingleCategory = async (payload) => {
  return await Category.create(payload);
};

export const getSingleCategory = async ({ id }) => {
  return await Category.findOne({ _id: id });
};

export const getAllCategories = async (pageMeta) => {
  const { limit, skip } = pageMeta;
  return await Category.find()
    .limit(limit || 10)
    .skip(skip || 1)
    .sort({name: "desc"}, {updatedAt: "asc"});
};

export const updateSingleCategory = async ({ id, input }) => {
  return await Category.updateOne({ _id: id }, input);
};

export const deleteSingleCategory = async (id) => {
  return await Category.deleteOne({ _id: id });
};
