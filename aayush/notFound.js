export const notFound = (request,response) =>
  response.status(404).send({message: "Route not found."})