import { Router } from "express";
import { createMenu, getMenu} from "../../../controllers/menu.controllers.js";
const router = Router();

router.post("/", createMenu);
router.get("/:slug", getMenu);



export default router;