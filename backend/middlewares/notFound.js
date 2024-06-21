import { HttpStatusEnum } from "../enums/status-enum.js";

export function notFound(req, res) {
  res.status(HttpStatusEnum.NOT_FOUND).json({
    success: false,
    code: HttpStatusEnum.NOT_FOUND,
    message: "Not Found",
  });
}
