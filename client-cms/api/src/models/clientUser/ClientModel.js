import ClientSchema from "./ClientSchema.js";

export const createNewUser = (obj) => {
  return ClientSchema(obj).save();
};
