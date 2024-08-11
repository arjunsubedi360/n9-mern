import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getMenu,
  getMenus,
  updateMenu,
} from "../../../controllers/index.js";
import { createMenuSchema } from "../../../validations/menu.validation.js";
import { validate } from "../../../middlewares/validation.js";
const router = Router();

router.get("/:id", getMenu);
router.post("/", validate(createMenuSchema), createMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);
router.get("/", getMenus);

export default router;
