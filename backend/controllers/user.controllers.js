import { HttpStatusEnum } from "../enums/status-enum.js";
import { getUsersList, createSingleUser } from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";

export const getUsers = (request, response) => {
  const userId = request.params.id;
  console.log(userId);
  const data = getUsersList();

  responseData({
    data: data,
    message: lang.LIST("Users"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

export const createUser = (request, response) => {
  const user = request.body;

  const data = createSingleUser({ user: user });

  responseData({
    data: data,
    message: lang.CREATE("User"),
    response,
    statusCode: HttpStatusEnum.CREATED,
  });
};
