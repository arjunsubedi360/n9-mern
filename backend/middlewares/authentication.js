import jwt from "jsonwebtoken";
import { get } from "../services/user.services.js";
export const authentication = async (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const splittedToken = token.split(" ")[1];
    const { id, email, status } = jwt.decode(splittedToken);
    const user = await get({ email });
    if (!user) {
      throw new Error("Unathorized");
    }
    request.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
