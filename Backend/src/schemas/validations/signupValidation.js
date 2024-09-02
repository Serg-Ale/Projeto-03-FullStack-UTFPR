import joi from "joi";

export const signupValidation = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().required(),
  createdAt: joi.string(),
});
