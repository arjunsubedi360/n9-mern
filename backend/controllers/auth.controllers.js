import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpStatusEnum } from "../enums/status.enum.js";
import { language } from "../utils/responseData.js";
import { jwtSecretKey } from "../config/index.js";
import { getUserByEmail } from "../services/user.services.js";

const login = async (req, res) => {
  try {
    const { email, password: inputPassword } = req.body;
    const userExists = await getUserByEmail(email);
    if (!userExists) {
      throw new Error("You are not registered");
    }
    if (
      userExists.email !== email ||
      !bcrypt.compareSync(inputPassword, userExists.password)
    ) {
      throw new Error("Email/Password does not match");
    }

    const token = jwt.sign(
      {
        _id: userExists._id,
        email: userExists.email,
        role: userExists.role,
      },
      jwtSecretKey
    );

    res.status(HttpStatusEnum.OK).json({ token, message: language.LOGIN });
  } catch (error) {
    console.log("error", error);
    res
      .status(HttpStatusEnum.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};
export { login };
