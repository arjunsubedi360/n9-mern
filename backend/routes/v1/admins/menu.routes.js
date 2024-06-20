import { Router } from "express";
import { createMenu, deleteMenu, getMenu, updateMenu } from "../../../controllers/index.js";

const router = Router();

router.get("/:id", getMenu);
router.post("/", createMenu);
router.put("/:id",updateMenu);
router.put("/:id", deleteMenu);

export default router;
