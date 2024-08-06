import { Router } from "express";
import AuthRouter from "./auth.routes.js";

const router = Router();

router.use("/users", AuthRouter);

export default router;
