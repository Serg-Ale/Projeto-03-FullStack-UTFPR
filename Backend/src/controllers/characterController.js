import { redisClient } from "../config/redisClient.js";
import characterService from "../services/characterService.js";

const create = async (req, res) => {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    // Cria o personagem
    const character = await characterService.create(body, id);

    // Invalida o cache relacionado
    const cacheKeyPattern = `character:*`; // Padrão para as chaves que você deseja remover
    const keys = await redisClient.keys(cacheKeyPattern);

    if (keys.length > 0) {
      await redisClient.del(keys); // Remove todas as chaves que correspondem ao padrão
      console.log("[Redis] Cache invalidado após a criação do personagem.");
    }

    return res.status(201).send(character);
  } catch (error) {
    return res.status(409).send(error.message);
  }
};

const findAllByName = async (req, res) => {
  const { name } = req.query;
  try {
    let characters = null;
    const key = "character:" + name;
    const value = await redisClient.get(key);

    if (value) {
      characters = JSON.parse(value);
      console.log("[Redis] Cache hit baby :D");
      return res.status(200).send(characters);
    }

    characters = await characterService.findAllByName(name);
    await redisClient.set(key, JSON.stringify(characters), { EX: 300 });

    return res.status(200).send(characters);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default { create, findAllByName };
