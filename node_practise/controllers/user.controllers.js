import { HttpStatusEnum } from "../enums/status.enum.js";
import bcrypt from "bcrypt.js"
import {
  createUser,
  getUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../services/user.services.js";
import { language } from "../utils/responseData.js";

const createSingleUser = async (req, res) => {
  try {
    const data = await createUser(req.body);

    res
      .status(HttpStatusEnum.OK)
      .json({ data, message: language.CREATE("User") });
  } catch (error) {
    res
      .status(HttpStatusEnum.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};
const updateSingleUser = async (req, res) => {
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
  const { skip, limit } = req.query;
  const skipNum = Number(skip);
  const limitNum = Number(limit);

  const pageMeta = {
    skip: skipNum,
    limit: limitNum
  };
  const data = await getUsers(pageMeta);
  res.status(HttpStatusEnum.OK).json(data);
};

const deleteSingleUser = async (req, res) => {
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
