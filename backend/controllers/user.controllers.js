import { userCreateService } from "../services/index.js";

export const get = (request, response) => {
    response.send(userCreateService());
};
