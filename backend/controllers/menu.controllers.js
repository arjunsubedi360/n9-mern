import { createSingleMenu } from "../services/menu.service";
import { responseData } from "../utils/responseData";

export const  createMenu = async (request, response) =>{
    const input = request.body;
    const data = await createSingleMenu(input);

    response.status(201).json(data)
} 