import Category from "../models/Category.js";

export const getSingleCategory = async (id) => {
  const data = await Category.findOne({ _id: id });
  console.log(data);
  return data;
};
