import jwt from "jsonwebtoken";
import "dotenv/config";
import userRepository from "../repositories/userRepository.js";

export const auth = (req, res, next) => {
  const resError = (msg) => {
    return res.status(401).send({
      message: `${msg}`,
    });
  };

  const { authorization } = req.headers;
  if (!authorization) return resError("Token not provided");

  const parts = authorization.split(" ");
  if (parts.length !== 2) return resError("Token malformed");

  const [schema, token] = parts;
  if (!/^Bearer$/i.test(schema)) return resError("Invalid schema");

  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) return resError("Invalid Token");
    if (!decode) return resError("Token cannot be decoded");

    const user = await userRepository.findById(decode.id);
    if (!user) return resError("User not found");

    res.locals.user = user;
    return next();
  });
};
