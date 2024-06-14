import { HttpStatusEnum } from "../enums/status-enum.js";
import { getOrderList, createSingleOrder } from "../services/index.js";
import { lang, responseData } from "../utils/successResponseData.js";

export const getOrder = async (request, response) => {
  const data = await getOrderList();
  responseData({
    data: data,
    message: lang.GET("Order"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};

export const createOrder = (request, response) => {
  const order = request.body;

  const data = createSingleOrder({ order: order });

  responseData({
    data: data,
    message: lang.CREATE("Order"),
    response,
    statusCode: HttpStatusEnum.CREATED,
  });
};

export const updateOrder = (request, response) => {
  const orderId = request.params.id;
  const order = request.body;

  const data = updateSingleOrder({ orderId: orderId, order: order });

  responseData({
    data: data,
    message: lang.UPDATE("Order"),
    response,
    statusCode: HttpStatusEnum.OK,
  });
};
