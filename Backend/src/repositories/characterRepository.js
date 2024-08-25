import CharacterSchema from "../schemas/Character.js";

const create = async (data) => {
  return await CharacterSchema.create(data);
};

const findByName = async (name) => {
  const character = await CharacterSchema.findOne({ name });
  return character;
};

const findAllByName = async (name) => {
  return await CharacterSchema.find({ name: name });
};

export default { create, findByName, findAllByName };
