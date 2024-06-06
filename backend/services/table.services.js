import Table from "../models/Table.js";
// Table resturant 
// create, update, delete, updateMany, createMany, deleteMany, 
export const createSingleTable = async (request, response) => {
  const data = await Table.create({ slug: "new-slug" });
  return data;
};
