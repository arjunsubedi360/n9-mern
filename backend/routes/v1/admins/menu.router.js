import { Router } from "express";
import { createMenu, getMenu } from "../../../controllers/index.js";



const router = Router();

router.get("/:id", getMenu);
router.post("/", createMenu);

export default router;