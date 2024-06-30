import { Router } from "express";
import { createSingleUser } from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validate.js";
import { createUser } from "../../../validations/user.validations.js";
import { authentication } from "../../../middlewares/authentication.js";
import { authorization } from "../../../middlewares/authorization.js";

const router = Router();

router.post(
  "/",
  validate(createUser),
  authentication,
  authorization,
  createSingleUser
);

export default router;
