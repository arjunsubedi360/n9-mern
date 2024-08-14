import { Router } from "express";
import UserRouter from "./users.routes.js";
import CategoryRouter from "./category.routes.js";
import ProductRouter from "./product.routes.js";
import AuthRouter from "./auth.routes.js";


const router = Router();

router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);
router.use("/products", ProductRouter);
router.use("/auth", AuthRouter);

export default router;
