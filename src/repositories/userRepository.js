import UserSchema from "../schemas/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const create = async (data) => {
  return await UserSchema.create(data);
};

const findByEmail = async (email) => {
  const user = await UserSchema.findOne({ email });
  return user;
};

const findById = async (id) => {
  const user = await UserSchema.findById(id);
  return user;
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 86400 });
};

export default { create, findByEmail, findById, generateToken };
