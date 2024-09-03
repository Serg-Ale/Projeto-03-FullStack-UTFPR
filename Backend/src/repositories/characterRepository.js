import CharacterSchema from "../schemas/Character.js";

const create = async (data) => {
  return await CharacterSchema.create(data);
};

const findByName = async (name) => {
  const character = await CharacterSchema.findOne({ name });
  return character;
};

const findAllByName = async (name) => {
  // Usando uma expressão regular para buscar nomes parcialmente correspondentes
  const regex = new RegExp(name, "i"); // "i" torna a busca case-insensitive
  return await CharacterSchema.find({ name: { $regex: regex } });
};

export default { create, findByName, findAllByName };
