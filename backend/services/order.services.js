import orders from "../models/order.js";

export const getOrderList = async () => {
  const data = await orders.find();
  return data;
};

export const createSingleOrder = ({ order }) => {
  orders.create(order);
  return order;
};
