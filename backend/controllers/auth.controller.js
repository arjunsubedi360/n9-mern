import jwt from "jsonwebtoken";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { get } from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const userExists = await get({ email });

    console.log("userexists", userExists)
    console.log("password match", userExists.password !== password);
    console.log("password from user", userExists.password)
    console.log("password", password);
    if (!userExists || userExists.password !== password) {
      throw new Error("Unauthorized");
    }

    const token = jwt.sign({ user: userExists }, "thisismysecretkey");

    responseData({
      data: { token: token },
      message: lang.LOGIN,
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.UNAUTHORIZED,
    });
  }
};

export { login };
