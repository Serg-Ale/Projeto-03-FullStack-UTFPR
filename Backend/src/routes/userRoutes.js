import { Router } from "express";
import userController from "../controllers/userController.js";
import { joiValidation } from "../middlewares/joiValidation.js";
import { signupValidation } from "../schemas/validations/signupValidation.js";
import { signinValidation } from "../schemas/validations/signinValidation.js";
import { auth } from "../middlewares/auth.js";

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

userRouter.get("/me", auth, userController.userLogged);

export default userRouter;
