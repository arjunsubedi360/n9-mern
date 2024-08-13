export const language = {
  CREATE: (title) => `${title || "Data"} created successfully.`,
  GET: (title) => `${title || "Data"} fetched successfully.`,
  LIST: (title) => `${title || "Data"} list successfully.`,
  LOGIN: "User logged in successfully."
};

export function responseData({
  success = true,
  data = null,
  message = "",
  response,
  statusCode = HttpStatusEnum.OK,
}) {
  response.status(statusCode).json({
    success: success,
    message,
    statusCode,
    ...(data && { data }),
  });
}
