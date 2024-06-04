import { Router } from "express";
import UserRouter from "./user.routes.js";
import PostRouter from "./post.routes.js";
import TableRouter from './table.routes.js';

const router = Router();

router.use("/users", UserRouter);
router.use("/posts", PostRouter);
router.use("/tables", TableRouter);

export default router;
