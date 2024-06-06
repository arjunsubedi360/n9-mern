import { HttpStatusEnum } from "../enums/status-enum.js";
import { getTablesList} from "../services/index.js";
import { lang, successResponseData } from "../utils/successResponseData.js";

export const getTables = (request, response) => {
  const data = getTablesList();

  successResponseData({
    data: data,
    message: lang.LIST("Tables"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};




