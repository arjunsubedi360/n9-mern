import { HttpStatusEnum } from "../enums/status-enum.js";

export function errorHandler(err, req, res, next) {
  res.status(err.code || HttpStatusEnum.INTERNAL_SERVER_ERROR).json(err?.message || "Something went wrong");
}
