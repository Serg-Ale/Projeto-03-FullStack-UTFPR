import { redisClient } from "../config/redisClient.js";
import userService from "../services/userService.js";

const signup = async (req, res) => {
  const body = req.body;

  try {
    const createdUser = await userService.signup(body);
    return res.status(201).send(createdUser);
  } catch (error) {
    return res.status(409).send(error.message);
  }
};

const signin = async (req, res) => {
  const body = req.body;

  try {
    let token = null;
    const key = "signin:" + req.params.email;
    const value = await redisClient.get(key);

    if (value) {
      token = JSON.parse(value);
      console.log("[Redis] Cache hit baby :D");
      return res.send(token);
    }

    token = await userService.signin(body);
    await redisClient.set(key, JSON.stringify(token), { EX: 300 });

    return res.send(token);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

const userLogged = async (req, res) => {
  const { _id: id } = res.locals.user;

  try {
    const user = await userService.userLogged(id);
    return res.send(user);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

export default { signin, signup, userLogged };
