import { Router } from "express";
import { login } from "../../../controllers/index.js";

const router = Router();

router.post("/login", login); //public 

export default router;
