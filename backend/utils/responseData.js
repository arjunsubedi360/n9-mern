export const lang = {
  CREATE: (title) => `${title || ""} created successfully.`,
  GET: (title) => `${title || ""} fetched successfully.`,
  UPDATE: (title) => `${title || ""} updated successfully.`,
  LIST: (title) => `${title || ""} list successfully.`,
<<<<<<< HEAD
=======
  DELETE: (title) => `${title || ""} deleted successfully.`,
>>>>>>> 324f4fad88bc8af6f825e10d280719b3733081c2
};

export function responseData({
  acknowledge = true,
  data = null,
  message = "",
  response,
  statusCode = HttpStatusEnum.OK,
}) {
<<<<<<< HEAD
  response.status(statusCode).json({
=======
  response.status(statusCode).send({
>>>>>>> 324f4fad88bc8af6f825e10d280719b3733081c2
    success: acknowledge,
    message,
    statusCode,
    ...(data && { data }),
  });
}
