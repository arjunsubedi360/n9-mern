import { Router } from "express";
import { getOrder, createOrder } from "../../../controllers/index.js";

const route = Router();

route.post("/", createOrder);
route.get("/get", getOrder);
route.put("/:id", getOrder);

export default route;
