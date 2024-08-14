import { HttpStatusEnum } from "../enums/status.enum.js";
import { language, responseData } from "../utils/responseData.js";
import { createCategory, deleteCategory, getCategories } from "../services/category.service.js";
import { slugify } from "../utils/slugify.js";

const createSingleCategory = async (request, response) => {
  try {
    const input = request.body;
    const name = request.body.name;
    // const { _id: userId } = request.user;
    const slug = slugify(name);

    const data = await createCategory({ ...input, slug });

    responseData({
      success: true,
      data,
      message: language.CREATE("Category"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      success: false,
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};

const deleteSingleCategory = async (request, response) => {
  try {
    const id = request?.params?.id;
    //TODO:: getCategory and if not exist throw category does not exist
    const data = await deleteCategory(id);

    responseData({
      success: true,
      data,
      message: language.DELETE("Category"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    responseData({
      success: false,
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};


const getCategoryList = async (request, response) => {
  try {
    const data = await getCategories({});

    responseData({
      success: true,
      data,
      message: language.LIST("Category"),
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    responseData({
      success: false,
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
    });
  }
};

export { createSingleCategory, deleteSingleCategory, getCategoryList };
