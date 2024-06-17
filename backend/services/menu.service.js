import { ObjectId } from "mongoose";
import Menu from "../models/Menu.js";

export const getSingleMenu = async (id) => {
  const data = await Menu.findOne({ _id: id });
  return data;
};

export const createSingleMenu = async (input) => {
  const data = await Menu.create(input);
  return data;
};
