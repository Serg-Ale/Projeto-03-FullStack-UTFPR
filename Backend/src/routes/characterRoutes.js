import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import characterController from "../controllers/characterController.js";
import { joiValidation } from "../middlewares/joiValidation.js";
import { characterValidationSchema } from "../schemas/validations/characterValidation.js";

const characterRouter = Router();
characterRouter.use(auth);

characterRouter.post(
  "/",
  joiValidation(characterValidationSchema),
  characterController.create
);

characterRouter.get("/", characterController.findAllByName);

export default characterRouter;
