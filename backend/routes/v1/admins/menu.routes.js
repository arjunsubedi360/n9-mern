import { Router } from "express";
import { createMenu, deleteMenu, getMenu,getMenus, updateMenu } from "../../../controllers/index.js";

const router = Router();

router.get("/:id", getMenu);
router.post("/", createMenu);
router.put("/:id",updateMenu);
router.put("/:id", deleteMenu);
router.get("/", getMenus);


export default router;
