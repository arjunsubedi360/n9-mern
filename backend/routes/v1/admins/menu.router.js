import { Router } from "express";
import { createSingleMenu } from "../../../services/menu.service.js";


const router = Router();

router.post("/", createSingleMenu);

export default router;