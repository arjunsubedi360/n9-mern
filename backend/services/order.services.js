import Order from "../models/Order.js";

export const getOrderList = async () => {
  const data = await Order.find({});
  return data;
};

export const createSingleOrder = async(input) => {
  const order = await Order.create(input);
  return order;
};
