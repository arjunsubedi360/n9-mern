import { HttpStatusEnum } from "../enums/status.enum.js";
import { roles } from "../utils/roles.js";

export const authorization = async (request, response, next) => {
  try {
    console.log("user detail",request.user);
    if (!roles.includes(request?.user?.role)) {
      throw new Error("Unauthorized");
    }
    next();
  } catch (error) {
    return response
      .status(HttpStatusEnum.FORBIDDEN)
      .json({ message: error.message || "Unauthorized" });
  }
};
