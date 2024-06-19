import { Router } from "express";
import CategoryRouter from "./category.routes.js";
import TableRouter from "./table.routes.js";
import UserRouter from "./user.router.js"

const router = Router();

router.use("/categories", CategoryRouter);
router.use("/tables", TableRouter);
router.use("/users",UserRouter)

export default router;
