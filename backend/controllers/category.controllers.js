import { createSingleCategory, getSingleCategory } from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";
import { HttpStatusEnum } from "../enums/status-enum.js";

export const getCategory = async (request, response) => {
  const id = request.params.id;
  const data = await getSingleCategory({ id });
  response.json(data);
};

export const createCategory = async (request, response) => {
  try {
    const input = request.body;
  
    const data = await createSingleCategory(input);
    responseData({
      data,
      message: lang.CREATE("Category"),
      statusCode: HttpStatusEnum.CREATED,
      response,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      acknowledge: false
    });
  }
};
