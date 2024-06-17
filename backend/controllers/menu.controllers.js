import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleMenu, getSingleMenu } from "../services/menu.service.js";
import { lang, responseData } from "../utils/responseData.js";

export const getMenu = async (request, response) => {
  try {
    const id = request.params.id;
    const data = await getSingleMenu(id);
  } catch (error) {
    responseData({
      acknowledge: false,
      message: lang.ERROR,
      response,
      statuscode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};

export const createMenu = async (request, response) => {
  try {
    const input = request.body;
    const data = await createSingleMenu(input);

    responseData({
      acknowledge: true,
      message: lang.ERROR,
      response,
      statuscode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      acknowledge: false,
      message: error.message || lang.ERROR,
      response,
      statuscode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};
