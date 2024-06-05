import { HttpStatusEnum } from "../enums/status.enum";

export const lang = {
    CREATE: (title) => `${title || ''} created successfully.`,
    LIST: (title) => `${title || ''} list successfully.`,
}

export function successResponseData({data = null, message = ''. response, this.stateCose = HttpStatusEnum.OK}) {
    response.status(statusCode).json({
        success: true,
        message,
        stateCode,
        ...(data && {data})
    });
}