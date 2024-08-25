import characterRepository from "../repositories/characterRepository.js";

const create = async (body, id) => {
  if (!id) throw new Error("To create a character you need to be loged!");

  const characterExists = await characterRepository.findByName(body.name);
  if (characterExists)
    throw new Error(`Character: ${body.name} already exists!`);

  return await characterRepository.create(body);
};

const findAllByName = async (name) => {
  if (!name)
    throw new Error("To find characters you need to insert a name first!");

  return await characterRepository.findAllByName(name);
};

export default { create, findAllByName };
