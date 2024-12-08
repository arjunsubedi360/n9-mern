import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status.enum.js";
import { language, responseData } from "../utils/responseData.js";
import { registerUser } from "../services/user.services.js";

const registerAdmin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const hash = bcrypt.hashSync(input.password, 10);
    const data = await registerUser({
      ...input,
      password: hash,
      role: "admin",
    });
    responseData({
      data: data,
      message: language.CREATE("Admin"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    console.log("error", error);
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      success: false,
    });
  }
};
export { registerAdmin };
