import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status-enum.js";
import { create, get } from "../services/user.services.js";
import { lang, responseData } from "../utils/responseData.js";
import { jwtSecretKey } from "../config/index.js";

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const userExists = await get({ email });

    if (!userExists) {
      //status cha vane check inactive
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
      name: userExists.name,
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

const register = async (request, response) => {
  try {
    const input = request.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(input.password, salt);
    const data = await create({ ...input, password: hash });
    responseData({
      data: data,
      message: lang.CREATE("User"),
      response,
      statusCode: HttpStatusEnum.CREATED,
    });
  } catch (error) {
    responseData({
      message: error.message,
      response,
      statusCode: HttpStatusEnum.BAD_REQUEST,
      acknowledge: false,
    });
  }
};

export { login, register };
