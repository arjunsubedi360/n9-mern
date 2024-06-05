import { HttpStatusEnum } from "./status-enum";

export const lang = {
   CREATE: (msg) => `${msg || ' '} created unsuccessful.`,
   LIST: (msg) =>   `${msg || ' '}listed successfully.`,
   SINGLE: (msg) => `${msg || ''} not in the list.`,
   DELETE: (msg) => `${msg || ' '} deleted unsucessfully.`,
   UPDATE: (msg) => `${msg || ' '} updated unsucessfully.`,
}

export function failResponse({ data = null, message = ' ', response, statusCode = HttpStatusEnum.OK}){
        response.status(statusCode).json({
            success: false,
            message,
            statusCode
        });

    }




    