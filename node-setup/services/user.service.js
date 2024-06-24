import User from "../models/User.js";
import { users } from "../models/users.js";

const getUser = async(id) => {
  console.log("user service hit")
  return await User.create({name: "Arjun"})
};

const deleteUser = (id)=> {
  return users.filter((user)=> user.login !== id);
};
export { getUser, deleteUser};
