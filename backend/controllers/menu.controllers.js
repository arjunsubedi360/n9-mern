
import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleMenu } from "../services/menu.service.js";
import { lang, responseData } from "../utils/responseData.js";


export const createMenu = async (request, response) => {
    try {
        const input = request.body;
        const data = await createSingleMenu(input);
        responseData({
            acknowledge: true,
            data: data,
            message: lang.CREATE("Menu"),
            response,
            statuscode: HttpStatusEnum.CREATED,
        });

    } catch (error) {
        responseData({
            acknowledge: false,
            data: data,
            message: error.message,
            response,
            statuscode: HttpStatusEnum.BAD_REQUEST,
        });
    }

}