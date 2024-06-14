import { request } from "express";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleMenu, getSingleMenu } from "../services/menu.service.js";
import { slugify } from "../utils/slugify.js";
import { lang, successResponseData } from "../utils/successResponseData.js";

export const createMenu = async (request, response) => {
  try {
    const input = request.body;

    //slug helps to make value unique (not using package for small task)
    const slug = slugify(input.name);

    const tableExists = await getSingleMenu(slug);
    console.log(tableExists);
    if (tableExists) {
      throw new Error("Table already exists");
    }
    const data = await createSingleMenu({ ...input, slug });

    console.log(data);
    successResponseData({
      data,
      message: lang.CREATE("Menu"),
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

export const getMenu= async (request, response) => {
  try {
    const slug = request.params.slug;
    if (!slug) {
      throw new Error("Slug does not exist");
    }
    const data = await getSingleMenu(slug);
    successResponseData({
      data: data,
      message: lang.GET("Menu"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    return error.message;
  }
};