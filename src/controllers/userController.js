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
    const token = await userService.signin(body);
    return res.send(token);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

export default { signin, signup };
