export const lang = {
  CREATE: (title) => `${title || ""} created successfully.`,
  GET: (title) => `${title || ""} fetched successfully.`,
  UPDATE: (title) => `${title || ""} updated successfully.`,
  LIST: (title) => `${title || ""} list successfully.`,
  DELETE: (title) => `${title || ""} deleted successfully.`,
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
