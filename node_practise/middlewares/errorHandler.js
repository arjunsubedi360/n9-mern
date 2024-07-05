import { HttpStatusEnum } from "../enums/http-status-enums.js";

export const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(HttpStatusEnum.BAD_REQUEST).json({ message: err.message });
  }
};
