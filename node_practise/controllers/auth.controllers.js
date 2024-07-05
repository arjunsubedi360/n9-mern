import jwt from "jsonwebtoken";
import { HttpStatusEnum } from "../enums/status.enum.js";
import { language } from "../utils/responseData.js";
import { jwtSecretKey } from "../config/index.js";
import { getUserByEmail } from "../services/user.services.js";

const login = async (req, res) => {
  try {
    const { email, password: inputPassword } = req.body;
    const userExists = await getUserByEmail(email);
    console.log("userExists", userExists);
    if (!userExists && inputPassword !== userExists?.password) {
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
    res
      .status(HttpStatusEnum.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};
export { login };
