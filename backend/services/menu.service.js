import { ObjectId } from 'mongoose';
import Menu from "../models/menu.js";


export const getSingleMenu = async (id) => {
  try {
    const data = await Menu.findOne({ _id: id });
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const createSingleMenu = async (input) => {
  const data = await Menu.create(input);
  return data;
}