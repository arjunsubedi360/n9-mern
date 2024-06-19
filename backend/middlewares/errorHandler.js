import { HttpStatusEnum } from "../enums/status-enum.js";

export function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(HttpStatusEnum.BAD_REQUEST).json({
    message: err.message || "Internal server error.",
  });
}
