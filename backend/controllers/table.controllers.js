import { HttpStatusEnum } from "../enums/status-enum.js";
import { createSingleTable } from "../services/index.js";
import { lang, successResponseData } from "../utils/successResponseData.js";

export const createTable = (request, response) => {
  const input = request.body;
  const data = createSingleTable(input);
  successResponseData({
    data,
    message: lang.CREATE("Table"),
    statusCode: HttpStatusEnum.CREATED,
    response,
  });
};
