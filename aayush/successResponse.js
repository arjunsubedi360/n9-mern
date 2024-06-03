
export const lang = {
    CREATE: (msg) => `${msg || ''} created successfully.`,
    LIST: (msg) => `${msg || ''} listed successfully.`,
    SINGLE: (msg) => `${msg || ''} listed successfully.`,
    DELETE: (msg) => `${msg || ''} deleted successfully.`,
    UPDATE: (msg) => `${msg || ''} User updated successfully.`
  }
  
    export function successResponseData({ data = null, message = '', response, statusCode = HttpStatusEnum.OK }) {
      console.log("data", data);
      response.status(statusCode).json({
        success: true,
        message,
        statusCode,
        ...(data && { data })
      });
    }