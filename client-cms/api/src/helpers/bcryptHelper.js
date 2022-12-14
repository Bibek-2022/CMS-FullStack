import bcrypt from "bcryptjs";
const salt = 15;

export const hashPassword = (val) => {
  return bcrypt.hashSync(val, salt);
};

export const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};
