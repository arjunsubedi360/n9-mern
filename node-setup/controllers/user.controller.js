import { HttpStatusEnum } from "../enums/status.enum.js";
import {
  createUser,
  getUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../services/user.service.js";

const createSingleUser = async (req, res) => {
  const input = req.body;
  const data = await createUser(input);

  res.status(HttpStatusEnum.OK).json(data);
};
const updateSingleUser = async(req, res) => {
  const id = req.params.id;
  const input = req.body;

  const data = await updateUser(id, input);
  res.status(HttpStatusEnum.OK).json(data);
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const data = await getUser(id);
  res.status(HttpStatusEnum.OK).json(data);
};

const getUsersList = async (req, res) => {
  const data = await getUsers();
  res.status(HttpStatusEnum.OK).json(data);
};

const deleteSingleUser = async(req, res) => {
  const { id } = req.params;
  const data = await deleteUser(id);
  res.status(HttpStatusEnum.OK).json(data);
};

export {
  createSingleUser,
  updateSingleUser,
  getSingleUser,
  deleteSingleUser,
  getUsersList,
};
