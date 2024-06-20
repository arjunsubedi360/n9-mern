import {Router} from "express";
import { createMenu, getMenu, updateMenu } from "../../../controllers/index.js";

const router = Router();

router.post("/", createMenu);
router.get("/:slug", getMenu);
router.put("/:slug", updateMenu); //update



export default router;
 