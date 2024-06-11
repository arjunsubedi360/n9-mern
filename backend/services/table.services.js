import Table from "../models/Table.js";
// create, createMany, updateOne, updateMany, deleteOne, deleteMany, findOne, find()
export const createSingleTable = async (payload) => {
  try {
    console.log({ payload });

    const data = await Table.create(payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleTable = async (slug) => {
  try {
    const data = await Table.findOne({ slug });
    return data;
  } catch (error) {
    return error;
  }
};
