import Category from "../models/Category.js";

const createCategory = async (input) => {
  const category = await Category.create(input);
  return Category.findOne({ _id: category._id }).populate({
    path: "createdBy",
    select: "name",
  });
  //https://mongoosejs.com/docs/populate.html
};
export { createCategory };
