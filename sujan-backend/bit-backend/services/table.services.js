import Table from '../models/Table.js';

export const createSingleTable = async (request, response) => {
    const data = await Table.create({slug: "new-slug"});
    return data;
};