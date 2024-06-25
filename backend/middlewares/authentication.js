import jwt from "jsonwebtoken";
import { get } from "../services/user.services.js";
import { HttpStatusEnum } from "../enums/status-enum.js"; //make this http status
import { jwtSecretKey } from "../config/index.js";

export const authentication = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response
        .status(HttpStatusEnum.UNAUTHORIZED)
        .json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return response.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token, jwtSecretKey);
    const { id, email } = decoded;

    const user = await get({ email });
    if (!user) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    //TODO:: add status on user model ::Lachhen
    // if (user.status !== 'active') { // statusEnum
    //   return response.status(403).json({ message: "User not active" });
    // }

    request.user = user; //req. user ko information bind
    next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid or expired token" });
  }
};
