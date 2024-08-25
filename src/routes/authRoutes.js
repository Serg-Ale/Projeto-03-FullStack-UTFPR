import { Router } from "express";
import authController from "../controllers/authController.js";
import { joiValidation } from "../middlewares/joiValidation.js";
import { signupValidation } from "../schemas/validations/signupValidation.js";
import { signinValidation } from "../schemas/validations/signinValidation.js";

const authRouter = Router();

authRouter.post(
  "/signup",
  joiValidation(signupValidation),
  authController.signup
);
authRouter.post(
  "/signin",
  joiValidation(signinValidation),
  authController.signin
);

export default authRouter;
