import User from "../models/User.js";

const createUser = async (input) => {
  console.log("user service hit", input);
  return await User.create(input);
};

const updateUser = async (id, input) => {
  return await User.updateOne({ _id: id }, input);
};

const getUser = async (id) => {
  return await User.findOne({ _id: id });
};

const getUsers = async () => {
  return await User.find({});
};

const deleteUser = async (id) => {
  return await User.deleteOne({ _id: id });
};
export { createUser, updateUser, getUser, getUsers, deleteUser };
