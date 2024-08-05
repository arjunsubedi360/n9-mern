import {
  createSingleCategory,
  deleteSingleCategory,
  getSingleCategory,
  getAllCategories,
  updateSingleCategory,
} from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { categorySchema } from "../validations/category.validation.js";

export const getCategory = async (request, response) => {
  const id = request.params.id;
  const data = await getSingleCategory({ id });
  responseData({
    data,
    message: lang.GET("Category"),
    statusCode: HttpStatusEnum.OK,
    response,
  });
};

export const getCategories = async (request, response) => {
  const { limit, page } = request.query;
  const pageLimit = Number(limit);
  const pageSkip = Number(page);

  const pageMeta = {
    limit: pageLimit,
    page: pageSkip || 1,
  };

  const data = await getAllCategories(pageMeta);
  responseData({
    data,
    message: lang.GET("Category"),
    statusCode: HttpStatusEnum.OK,
    response,
  });
};

export const createCategory = async (request, response) => {
  const { _id: userId } = request.user;
  const input = request.body;

  const data = await createSingleCategory({ ...input, createdBy: userId });
  responseData({
    data,
    message: lang.CREATE("Category"),
    statusCode: HttpStatusEnum.CREATED,
    response,
  });
};

export const updateCategory = async (request, response) => {
  try {
    let data;
    const id = request.params.id;
    const input = request.body;

    const categoryExists = await getSingleCategory({ id });

    if (!categoryExists) {
      throw new Error("Category does not exist.");
    }
    data = await updateSingleCategory({ id, input });

    if (data.modifiedCount === 1) {
      data = await getSingleCategory({ id });
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

export const deleteCategory = async (request, response) => {
  const id = request.params.id;
  const data = await deleteSingleCategory(id);
  responseData({
    data,
    message: lang.DELETE("Category"),
    statusCode: HttpStatusEnum.OK,
    response,
  });
};
