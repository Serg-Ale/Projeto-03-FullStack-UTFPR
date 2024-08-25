import { Router } from "express";
import userController from "../controllers/userController.js";
import { joiValidation } from "../middlewares/joiValidation.js";
import { signupValidation } from "../schemas/validations/signupValidation.js";
import { signinValidation } from "../schemas/validations/signinValidation.js";

const userRouter = Router();

userRouter.post(
  "/signup",
  joiValidation(signupValidation),
  userController.signup
);
userRouter.post(
  "/signin",
  joiValidation(signinValidation),
  userController.signin
);

export default userRouter;
