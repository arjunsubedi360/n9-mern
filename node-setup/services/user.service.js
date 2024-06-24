import { users } from "../models/users.js";

const getUser = (id) => {
  return users.find((user) => user.login == id);
};

const deleteUser = (id)=> {
  return users.filter((user)=> user.login !== id);
};
export { getUser, deleteUser};
