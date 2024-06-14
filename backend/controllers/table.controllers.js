import { request } from "express";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleTable, getSingleTable } from "../services/index.js";
import { slugify } from "../utils/slugify.js";
import { lang, successResponseData } from "../utils/successResponseData.js";

export const createTable = async (request, response) => {
  try {
    const input = request.body;

    //slug helps to make value unique (not using package for small task) Table 1 table-1
    const slug = slugify(input.name);

    const tableExists = await getSingleTable(slug);
    console.log(tableExists);
    if (tableExists) {
      throw new Error("Table already exists");
    }
    const data = await createSingleTable({ ...input, slug });

    console.log(data);
    successResponseData({
      data,
      message: lang.CREATE("Table"),
      statusCode: HttpStatusEnum.CREATED,
      response,
    });
  } catch (error) {
    successResponseData({
      data: null,
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};

export const getTable = async (request, response) => {
  try {
    const slug = request.params.slug;
    if (!slug) {
      throw new Error("Slug does not exist");
    }
    const data = await getSingleTable(slug);
    successResponseData({
      data: data,
      message: lang.GET("Table"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    return error.message;
  }
};
