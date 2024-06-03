
export const lang = {
    CREATE: (msg) => `${msg || ''} created unsuccessful.`,
    LIST: (msg) => `${msg || ''} listed successfully.`,
    SINGLE: (msg) => `${msg || ''} not in the list.`,
    DELETE: (msg) => `${msg || ''} deleted unsuccessful.`,
    UPDATE: (msg) => `${msg || ''} updated unsuccessful.`
  }
  
    export function failResponseData({ data = null, message = '', response, statusCode = HttpStatusEnum.OK }) {
      response.status(statusCode).json({
        success: false,
        message,
        statusCode,
      });
    }