import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status-enum.js";
import {
  create,
  getAll,
  update,
  dlt,
  getSingleUser,
} from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";

const getUsers = async (request, response) => {
  const { limit, page } = request.query;
  const pageLimit = Number(limit);
  const pageSkip = Number(page);

  const pageMeta = {
    limit: pageLimit,
    page: pageSkip || 1,
  };

  const { data, pagination } = await getAll(pageMeta);
  responseData({
    data: data,
    pagination: pagination,
    message: lang.LIST("Users"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

const getUser = async (request, response) => {
  const { id } = request.params;

  const data = await getSingleUser(id);
  responseData({
    data: data,
    message: lang.LIST("Users"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

const createUser = async (request, response) => {
  try {
    const input = request.body;
    const salt = bcrypt.genSaltSync(10);
    const password = input.password ?? "Password@1";
    const hash = bcrypt.hashSync(password, salt);
    const data = await create({ ...input, password: hash });
    responseData({
      data: data,
      message: lang.CREATE("User"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      acknowledge: false,
    });
  }
};
const updateUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = request.body;
    const data = await update(userId, user);
    responseData({
      data: data,
      message: lang.CREATE("Update"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      acknowledge: false,
    });
  }
};
const deleteUser = async (request, response) => {
  try {
    const userId = request.params.id;

    const data = await dlt(userId);

    responseData({
      data: data,
      message: lang.CREATE("Delete"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      acknowledge: false,
    });
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
