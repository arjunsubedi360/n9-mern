import jwt from "jsonwebtoken";
import { HttpStatusEnum } from "../enums/status.enum.js";
import { jwtSecretKey } from "../config/index.js";
import { getUser } from "../services/user.services.js";

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
    const { _id: id } = decoded;

    const user = await getUser(id);

    if (!user) {
      return response
        .status(HttpStatusEnum.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
    }

    //TODO:: add status on user model ::
    // if (user.status !== 'active') { // statusEnum
    //   return response.status(403).json({ message: "User not active" });
    // }

    request.user = { //request is object request.user = {id: 1} 
      _id: user._id,
      role: user?.role,
      email: user?.email,
    }; //req.user ko information bind (Now we can get this information by req.user)
    next();
  } catch (error) {
    console.log("error", error);
    return response.status(401).json({ message: "Invalid or expired token" });
  }
};
