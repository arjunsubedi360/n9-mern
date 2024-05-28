import { request } from "express";

export const notFound = (request, response) => response.status(404).send('Route does not exist');