import characterService from "../services/characterService.js";

const create = async (req, res) => {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const character = await characterService.create(body, id);
    return res.status(201).send(character);
  } catch (error) {
    return res.status(409).send(error.message);
  }
};

const findAllByName = async (req, res) => {
  const { name } = req.body;
  try {
    const characters = await characterService.findAllByName(name);
    return res.status(200).send(characters);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default { create, findAllByName };
