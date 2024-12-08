import { Router } from "express";
import UserRouter from "./auth.routes.js";

const router = Router();

router.use("/users", UserRouter);

export default router;
