import {createSingleTable} from "../services/index.js";

export const createTable = (request, response)=> {
    response.send(createSingleTable());
};