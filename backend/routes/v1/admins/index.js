import { Router } from "express";
import UserRouter from "./users.routes.js";
import CategoryRouter from "./category.routes.js";
import ProductRouter from "./product.routes.js";

const router = Router();

router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);
router.use("/products", ProductRouter);

export default router;
