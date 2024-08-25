import joi from "joi";

export const characterValidationSchema = joi.object({
  name: joi.string().required(),
  totalEpisodes: joi.number().integer().min(0).max(100).required(),
  status: joi.string().valid("Alive", "Dead", "Unknown").required(),
  type: joi.string().optional(),
});
