export const lang = {
  CREATE: (msg) => `${msg || ""} created successfully.`,
  LIST: (msg) => `${msg || ""} list successfully.`,
};

export function successResponseData({
  data = null,
  message = "",
  response,
  statusCode = HttpStatusEnum.OK,
}) {
  console.log("data", data);
  response.status(statusCode).json({
    success: true,
    message,
    statusCode,
    ...(data && { data }),
  });
}
