import { request } from "express";
import { HttpStatusEnum } from "../enums/status-enum.js";
import {
  createSingleTable,
  getSingleTable,
  updateSingleTable,
} from "../services/index.js";
import { slugify } from "../utils/slugify.js";
import { lang, responseData } from "../utils/responseData.js";

export const createTable = async (request, response) => {
  try {
    const input = request.body;

    //slug helps to make value unique (not using package for small task)
    const slug = slugify(input.name);

    const tableExists = await getSingleTable({ slug });
    console.log(tableExists);
    if (tableExists) {
      throw new Error("Table already exists");
    }
    const data = await createSingleTable({ ...input, slug });

    console.log(data);
    responseData({
      data,
      message: lang.CREATE("Table"),
      statusCode: HttpStatusEnum.CREATED,
      response,
    });
  } catch (error) {
    responseData({
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
    const data = await getSingleTable({ slug });
    responseData({
      data: data,
      message: lang.GET("Table"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    return error.message;
  }
};

export const updateTable = async (request, response) => {
  try {
    let data;
    const slugValue = request.params.slug;
    const input = request.body;

    const payload = {
      ...input,
      slug: slugify(input.name),
    };

    const tableExists = await getSingleTable({ slug: slugValue });
    if (!tableExists) {
      throw new Error("Table does not exist");
    }

    const updatedData = await updateSingleTable(slugValue, payload);

    if (updatedData.modifiedCount === 1) {
      data = await getSingleTable({ slug: payload.slug });
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
