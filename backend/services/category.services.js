import Category from "../models/Category.js";

export const createSingleCategory = async (payload) => {
  return await Category.create(payload);
};

export const getSingleCategory = async ({ id }) => {
  return await Category.findOne({ _id: id }).populate({
    path: "createdBy",
    select: "name",
  });
};

export const getAllCategories = async (pageMeta) => {
  const { limit, page } = pageMeta;

  const skip = (page - 1) * limit; //
  const total = await Category.countDocuments();
  const hasNextPage = page * limit < total;
  const data = await Category.find()
    .limit(limit || 10) //fallback
    .skip(skip || 0) //fallback
    .sort({ updatedAt: -1 });

  return {
    data,
    pagination: {
      total,
      hasNextPage,
    },
  };
};

export const updateSingleCategory = async ({ id, input }) => {
  return await Category.updateOne({ _id: id }, input);
};

export const deleteSingleCategory = async (id) => {
  return await Category.deleteOne({ _id: id });
};
