import { Router } from "express";
import { validate } from "../../../middlewares/validate.js";
import { createUser } from "../../../validations/user.validations.js";
import { authentication } from "../../../middlewares/authentication.js";
import { authorization } from "../../../middlewares/authorization.js";
import { createSingleCategory } from "../../../controllers/category.controllers.js";

const router = Router();

router.post(
  "/",
  // validate(createUser),
  authentication,
  authorization,
  createSingleCategory
);

export default router;
