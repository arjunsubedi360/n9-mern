import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { get } from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";
import { jwtSecretKey } from "../config/index.js";

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const userExists = await get({ email });

    if (!userExists) { //status cha vane check inactive
      throw new Error("You are not registered in our system");
    }

    if (
      userExists.email !== email ||
      !bcrypt.compareSync(password, userExists?.password)
    ) {
      throw new Error("Email/Password does not match");
    }

    const user = {
      id: userExists.id,
      email: userExists.email,
      role: userExists.role,
    };

    const token = jwt.sign(user, jwtSecretKey);

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
