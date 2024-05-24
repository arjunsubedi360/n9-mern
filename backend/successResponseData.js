
  export function successResponseData({ data = null, message = '', res, statusCode = HttpStatusEnum.OK }) {
    console.log("data", data);
    res.status(statusCode).json({
      success: true,
      message,
      statusCode,
      ...(data && { data })
    });
  }

  