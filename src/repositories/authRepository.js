import UserSchema from "../schemas/User.js";

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

export default { create, findByEmail, findById };
