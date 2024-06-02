import { userCreateService } from "../services/index.js";

export const userControllerGet = (request, response) => {
    response.send(userCreateService());
};
