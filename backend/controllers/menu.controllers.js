import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleMenu, deleteSingleMenu, getSingleMenu, updateSingleMenu } from "../services/menu.services.js";
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
export const updateMenu = async (request, response) => {
  try {
    let data;
    const id = request.params.id;
    const input = request.body;

    const categoryExists = await getSingleMenu({ id });

    if (!categoryExists) {
      throw new Error("Category does not exist.");
    }
    data = await updateSingleMenu({ id, input });

    if (data.modifiedCount === 1) {
      data = await getSingleMenu({ id });
    }

    responseData({
      data,
      message: lang.UPDATE("Category"),
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

export const deleteMenu = async (request, response) => {
  const id = request.params.id;
  const data = await deleteSingleMenu(id);
  responseData({
    data,
    message: lang.DELETE("Category"),
    statusCode: HttpStatusEnum.OK,
    response,
  });
};
