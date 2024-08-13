import { Router } from "express";
import { login } from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validate.js";
import { login as loginValidation } from "../../../validations/auth.validations.js";

const router = Router();

router.post("/login", validate(loginValidation), login);

export default router;
