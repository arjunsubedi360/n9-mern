
export const lang = {
  CREATE: (title) => `${title || ''} created successfully.`,
  LIST: (title) => `${title || ''} list successfully.`
}

  export function successResponseData({ data = null, message = '', response, statusCode = HttpStatusEnum.OK }) {
    response.status(statusCode).json({
      success: true,
      message,
      statusCode,
      ...(data && { data })
    });
  }

  