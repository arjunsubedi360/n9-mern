import Category from "../models/Category.js";

const createCategory = async (input) => {
  const category = await Category.create(input);
  return Category.findOne({ _id: category._id }).populate({
    path: "createdBy",
    select: "name",
  });
  //https://mongoosejs.com/docs/populate.html
};

const deleteCategory = async (id) => {
  return Category.deleteOne({_id: id});
};


const getCategories = async (id) => {
  return Category.find({});
};

const getCategory = async (id) => {
  return Category.findOne({_id: id});
};

export { createCategory, deleteCategory, getCategories, getCategory };
