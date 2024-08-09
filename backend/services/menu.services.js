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
  return await Menu.updateOne({ _id: id }, input);
};

export const deleteSingleMenu = async (id) => {
  return await Menu.deleteOne({ _id: id });
};

export const getMenuList = async () => {
  return await Menu.find({});
};
