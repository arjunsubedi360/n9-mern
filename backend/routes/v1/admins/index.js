import { Router } from "express";
import UserRouter from "./user.routes.js";
import PostRouter from "./post.routes.js";
import MenuRouter from './menu.routes.js';

const router = Router();

router.use("/users", UserRouter);
router.use("/posts", PostRouter);
router.use("/menu",MenuRouter);

export default router;
