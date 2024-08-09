import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status.enum.js";
import { language, responseData } from "../utils/responseData.js";
import { jwtSecretKey } from "../config/index.js";
import { getUserByEmail } from "../services/user.services.js";

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    console.log("password", password);
    const userExists = await getUserByEmail(email);

    console.log("userExists", userExists);
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
      message: language.LOGIN,
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    responseData({
      success: false,
      message: error.message,
      response,
      statusCode: HttpStatusEnum.UNAUTHORIZED,
    });
  }
};
export { login };
