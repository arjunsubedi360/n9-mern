import { createSingleCategory, getSingleCategory } from "../services/index.js";
import { lang, responseData } from "../utils/responseData.js";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { slugify } from "../utils/slugify.js";

export const getCategory = async (request, response) => {
  const name = request.params.name;
  const data = await getSingleCategory({ name });
  response.send(data);
};

export const createCategory = async (request, response) => {
  try {
    const input = request.body;

    const name = slugify(input.name);

    const CategoryExists = await getSingleCategory({ name });
    console.log(CategoryExists);
    if (CategoryExists) {
      throw new Error("Table already exists");
    }
    const data = await createSingleCategory({ ...input, name });
    console.timeLog(data);
    responseData({
      data,
      message: lang.CREATE("Category"),
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
