import { getSingleUser } from "../services/index.js";

export const getUser = (request, response) => {
    response.send(getSingleUser());
};
