import { createSingleItems, deleteSingleItems, getSingleItems, updateSingleItems } from "../services/items.services.js";
  import { lang, responseData } from "../utils/responseData.js";
  import { HttpStatusEnum } from "../enums/status-enum.js";

  
  export const getItems = async (request, response) => {
    const id = request.params.id;
    const data = await getSingleItems({ id });
    responseData({
      data,
      message: lang.GET("items"),
      statusCode: HttpStatusEnum.OK,
      response,
    });
  };
  
  export const createItems = async (request, response) => {
    const input = request.body;
  
    const data = await createSingleItems(input);
    responseData({
      data,
      message: lang.CREATE("items"),
      statusCode: HttpStatusEnum.CREATED,
      response,
    });
  };
  
  export const updateItems = async (request, response) => {
    try {
      let data;
      const id = request.params.id;
      const input = request.body;
  
      const categoryExists = await getSingleItems({ id });
  
      if (!itemsExists) {
        throw new Error("items does not exist.");
      }
      data = await updateSingleItems({ id, input });
  
      if (data.modifiedCount === 1) {
        data = await getSingleItems({ id });
      }
  
      responseData({
        data,
        message: lang.UPDATE("items"),
        statusCode: HttpStatusEnum.CREATED,
        response,
      });
    } catch (error) {
      responseData({
        acknowledge: false,
        message: error.message,
        response,
        statusCode: HttpStatusEnum.BAD_REQUEST,
      });
    }
  };
  
  export const deleteItems= async (request, response) => {
    const id = request.params.id;
    const data = await deleteSingleItems(id);
    responseData({
      data,
      message: lang.DELETE("items"),
      statusCode: HttpStatusEnum.OK,
      response,
    });
  };
  