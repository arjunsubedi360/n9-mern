import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleCategory, getSingleCategory } from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";

export const getCategory = async (request, response) => {
  const id = request.params.id;
  const data = await getSingleCategory(id);

  response.send(data);
};

export const createCategory = async (request, response) => {
 try {
     const input = request.body;
     const data = await createSingleCategory(input);
     
     responseData({
       acknowledge: true,
       data: data,
       message: lang.CREATE("Category"),
       response,
       statusCode: HttpStatusEnum.CREATED,
     });
 } catch (error) {
    responseData({
        acknowledge: false,
        message: error.message,
        response,
        statusCode: HttpStatusEnum.BAD_REQUEST,
    })
 }
};
