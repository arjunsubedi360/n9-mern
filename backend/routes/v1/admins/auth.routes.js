import { Router } from "express";
import { registerAdmin } from "../../../controllers/index.js";
const router = Router();

//register, login, forgot password, reset password, change password, verify email
router.post("/register", registerAdmin);

export default router;
