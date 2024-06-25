import Menu from "../models/Menu.js";

export const getSingleMenu = async (id) => {
  const data = await Menu.findOne({ _id: id });
  return data;
};

export const createSingleMenu = async (input) => {
  const data = await Menu.create(input);
  return data;
};
export const updateSingleMenu = async ({ id, input }) => {
  return await Category.updateOne({ _id: id }, input);
};

export const deleteSingleMenu = async (id) => {
  return await Category.deleteOne({ _id: id });
};
