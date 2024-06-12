import { getSingleCategory } from "../services/index.js";

export const getCategory =async (request, response) => {
    const id = request.params.id;
    const data  = await getSingleCategory(id);

    response.send(data);
};
