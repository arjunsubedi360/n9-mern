import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status.enum.js";
import {
  registerUser,
  createUser,
  getUser,
  deleteUser,
  getUsers,
  updateUser,
  deleteUsers
} from "../services/user.services.js";
import { language, responseData } from "../utils/responseData.js";

// Register Single User
const registerSingleUser = async (req, res) =>{
  try {
    const input = req.body;
    const hash = bcrypt.hashSync(input.password, 10);
    const data = await registerUser({...input, password:hash});
    responseData({
      data: data,
      message: language.CREATE("User"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      success: false,
    });
  }
}

const createSingleUser = async (request, response) => {
  try {
    const input = request.body;
    const hash = bcrypt.hashSync(input.password, 10);
    const data = await createUser({ ...input, password: hash });
    
    responseData({
      data: data,
      message: language.CREATE("User"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      success: false,
    });
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
    limit: limitNum,
  };
  const data = await getUsers(pageMeta);
  res.status(HttpStatusEnum.OK).json(data);
};

const deleteSingleUser = async (req, res) => {
  const { id } = req.params;
  const data = await deleteUser(id);
  res.status(HttpStatusEnum.OK).json(data);
};

const deleteAllUsers = async (req, res) => {
  const data = await deleteUsers();
  res.status(HttpStatusEnum.OK).json(data);
};

export {
  registerSingleUser,
  createSingleUser,
  updateSingleUser,
  getSingleUser,
  deleteSingleUser,
  getUsersList,
  deleteAllUsers
};
