import { request, response } from "express";

export const authentication = (request, response, next) => {
  const id = 1;
  request.user = { id: id, role: "admin", status: "active" };
  if (request.user.status !== "active") {
    response.json({ message: "Invalid cred" });
  }
  next();
};
