import { Router } from "express";
import { validate } from "../../../middlewares/validate.js";
import { authentication } from "../../../middlewares/authentication.js";
import { authorization } from "../../../middlewares/authorization.js";
import { createSingleProduct } from "../../../controllers/product.controllers.js";
import { createProduct } from "../../../validations/product.validations.js";

const router = Router();

router.post(
  "/",
  validate(createProduct),
  authentication,
  authorization,
  createSingleProduct
);

export default router;
