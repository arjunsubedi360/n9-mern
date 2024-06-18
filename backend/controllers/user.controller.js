import { HttpStatusEnum } from "../enums/status-enum.js";
import { create,get } from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";

 const getUsers = async(request, response) => {
  const data = await get();
  responseData({
    data: data,
    message: lang.LIST("Users"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

 const createUser =async (request, response) => {
  const user = request.body;

  const data =await create(user);

  responseData({
    data: data,
    message: lang.CREATE("User"),
    response,
    statusCode: HttpStatusEnum.CREATED,
  });
};


export {createUser,getUsers}