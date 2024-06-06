import Table from "../models/Table.js";
// create, createMany, updateOne, updateMany, deleteOne, deleteMany, findOne, find()
export const createSingleTable = async (payload) => {
  console.log({ payload });
  const { slug } = payload;
  const data = await Table.create({ slug });
  console.log(data);
  return Table.findOne({ _id: data._id });
};
