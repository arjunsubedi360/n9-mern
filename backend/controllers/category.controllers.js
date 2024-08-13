import { HttpStatusEnum } from "../enums/status.enum.js";
import { language } from "../utils/responseData.js";
import { createCategory } from "../services/category.service.js";
import { slugify } from "../utils/slugify.js";

const createSingleCategory = async (request, response) => {
  try {
    console.log("req.body", request.body);
    const input = request.body;
    const name = request.body.name;
    console.log("request.user", request.user);
    const { _id: userId } = request.user;
    const slug = slugify(name);

    const data = await createCategory({ ...input, slug , createdBy: userId});

    response
      .status(HttpStatusEnum.OK)
      .json({ data, message: language.CREATE("Category") });
  } catch (error) {
    response
      .status(HttpStatusEnum.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};

export { createSingleCategory };
