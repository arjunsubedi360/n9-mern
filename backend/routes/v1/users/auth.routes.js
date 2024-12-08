import { Router } from "express";
import { login } from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validate.js";
import {
  loginValidation,
  registerValidation,
} from "../../../validations/auth.validations.js";

const router = Router();

router.post("/login", validate(loginValidation), login);
// router.post("/register", validate(registerValidation), login);

export default router;
