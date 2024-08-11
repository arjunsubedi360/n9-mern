import { HttpStatusEnum } from "../enums/status-enum.js";

export const lang = {
  CREATE: (title) => `${title || "Item"} created successfully.`,
  GET: (title) => `${title || "Item"} fetched successfully.`,
  UPDATE: (title) => `${title || "Item"} updated successfully.`,
  LIST: (title) => `${title || "Item"} list successfully.`,
  DELETE: (title) => `${title || "Item"} deleted successfully.`,
  LOGIN: "Login successfully",
};

export function responseData({
  acknowledge = true,
  data = null,
  pagination = null,
  message = "",
  response,
  statusCode = HttpStatusEnum.OK,
}) {
  response.status(statusCode).send({
    success: acknowledge,
    message,
    statusCode,
    ...(data && { data }),
    ...(pagination && { pagination }),
  });
}
