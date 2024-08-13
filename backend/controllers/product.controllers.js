import { HttpStatusEnum } from "../enums/status.enum.js";
import { language } from "../utils/responseData.js";
import { createProduct } from "../services/product.service.js";

const createSingleProduct = async (request, response) => {
  try {
    const input = request.body;
    const { _id: userId } = request.user;

    const data = await createProduct({ ...input, createdBy: userId});

    response
      .status(HttpStatusEnum.OK)
      .json({ data, message: language.CREATE("Product") });
  } catch (error) {
    response
      .status(HttpStatusEnum.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};

export { createSingleProduct };
