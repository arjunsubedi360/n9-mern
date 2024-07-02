import { HttpStatusEnum } from "../enums/status-enum.js";
import { create, getAll, update, dlt } from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";

const getUsers = async (request, response) => {
  const { limit, skip, sort, search, ...filters } = request.query;
  const pageLimit = Number(limit) || 10;
  const pageSkip = Number(skip) || 0;
  const sortOptions = sort ? JSON.parse(sort) : {};

  const pageMeta = {
    limit: pageLimit,
    skip: pageSkip,
    sort: sortOptions,
  };

  const data = await getAll(pageMeta, filters, search);
  responseData({
    data: data,
    message: lang.LIST("Users"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

const createUser = async (request, response) => {
  try {
    const user = request.body;
    const data = await create(user);
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

export { createUser, getUsers, updateUser, deleteUser };
