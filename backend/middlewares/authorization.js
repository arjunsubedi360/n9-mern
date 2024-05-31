import { roles } from "../enums/index.js";

export const authorization = (request, response, next) => {
  console.log(request.user);
  if (!roles.includes(request.user.role)) {
    response.json({ message: "Unauthorized!" });
  }
  next();
};
