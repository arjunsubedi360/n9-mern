import Menu from "../models/menu.js";
// create, createMany, updateOne, updateMany, deleteOne, deleteMany, findOne, find()
export const createSingleMenu = async (payload) => {
  try {
    console.log({ payload });

    const data = await Menu.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleMenu = async (slug) => {
  try {
    const data = await Menu.findOne({ slug });
    return data;
  } catch (error) {
    return error;
  }
};