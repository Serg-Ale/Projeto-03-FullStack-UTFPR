import joi from "joi";

export const signupValidation = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  createdAt: joi.string(),
});
