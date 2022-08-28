import ClientSchema from "./ClientSchema.js";

export const createNewUser = (obj) => {
  return ClientSchema(obj).save();
};

export const updateUser = (filter, obj) => {
  return ClientSchema.findOneAndUpdate(filter, obj, { new: true });
};

export const getOneUser = (obj) => {
  return ClientSchema.findOne(obj);
};
