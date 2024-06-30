import {
  createSingleCategory,
  getSingleCategory,
  getAllCategories,
  updateSingleCategory,
} from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";
import { HttpStatusEnum } from "../enums/status-enum.js";

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
    const id = request.params.id;
    const input = request.body;
    console.log(id, input);

    const payload = { ...input };
    console.log(payload);

    const tableExists = await getSingleCategory({ _id: id });
    if (!tableExists) {
      throw new Error("Table does not exists.");
    }
    const updatedData = await updateSingleCategory(id, payload);

    if (updatedData.modifiedCount === 1) {
      data = await getSingleCategory({ slug: payload.slug });
    }

    responseData({
      data: data,
      message: lang.UPDATE("Table"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    responseData({
      acknowledge: false,
      response,
      message: error.message,
      statusCode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};
