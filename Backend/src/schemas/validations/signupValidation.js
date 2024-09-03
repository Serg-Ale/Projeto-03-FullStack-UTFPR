import joi from "joi";

export const signupValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  createdAt: joi.string(),
});
