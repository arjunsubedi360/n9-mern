import { Router } from "express";
import { login, register } from "../../../controllers/index.js";

const router = Router();

router.post("/login", login); //public 
router.post("/register", register)

export default router;
