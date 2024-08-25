import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

const signup = async (body) => {
  const userExists = await authRepository.findByEmail(body.email);
  if (userExists) throw new Error("User already exists!");

  const hashPassowrd = bcrypt.hashSync(body.password, 10);
  return await authRepository.create({ ...body, password: hashPassowrd });
};

const signin = async (body) => {
  const userExists = await authRepository.findByEmail(body.email);
  if (!userExists) throw new Error("Email or password incorrect!");

  const passwordVerification = bcrypt.compareSync(
    body.password,
    userExists.password
  );
  if (!passwordVerification) throw new Error("Email or password incorrect!");

  return authRepository.generateToken(userExists._id);
};

export default { signin, signup };
