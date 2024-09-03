import rateLimit from "express-rate-limit";

export const requestLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message:
    "You have exceeded the number of requests allowed. Please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
