import { getSinglePost } from "../services/index.js";

export const getPost = (request, response) => {
    response.send(getSinglePost());
};
