import { HttpStatusEnum } from "../enums/status-enum.js";

export const lang = {
  CREATE: (title) => `${title || ""} created successfully.`,
  GET: (title) => `${title || ""} fetched successfully.`,
  UPDATE: (title) => `${title || ""} updated successfully.`,
  LIST: (title) => `${title || ""} list successfully.`,
  ERROR: "Something went wrong"
};

export function responseData({
  acknowledge = true,
  data = null,
  message = "",
  response,
  statusCode = HttpStatusEnum.OK,
}) {
  response.status(statusCode).json({
    success: acknowledge,
    message,
    statusCode,
    ...(data && { data }),
  });
}
