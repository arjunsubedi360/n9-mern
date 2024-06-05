import { HttpStatusEnum } from "./status-enum";

export const lang = {
    CREATE: (msg) => `${msg || ''} created successfully.`,
    LIST: (msg) => `${msg || ''} listed sucessfully.`,
    SINGLE: (msg) => `${msg || ' '} listed sucessfully.`,
    DELETE: (msg) => `${msg || ''} deleted sucessfully.`,
    UPDATE: (msg) => `${msg || ''} user update sucessfully.`
}
export function sucessResponseData({
    data = null, message = '', response, statusCode = HttpStatusEnum.OK
}){
    console.log("data", data);
    response.status(statusCode).json({
        success: true,
        message,
        statusCode,
        ...(data && {data})
    });
}