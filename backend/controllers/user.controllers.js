import { HttpStatusEnum } from "../enums/http-status-enums.js";
import { createSingleUser } from "../services/user.services.js";

export const createUser = async (request, response) => {
  try {
    const input = request.body;

    const data = await createSingleUser(input);

    response.status(HttpStatusEnum.OK).json(data);

  } catch (error) {
    console.log("error", error)
    response.status(HttpStatusEnum.BAD_REQUEST).json(error);
  }
};
