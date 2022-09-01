import SessionSchema from "./SessionSchema.js";

/**
 * It takes an object as an argument, and then it returns a promise that resolves to the result of
 * saving the object to the database
 * @param obj - {
 * @returns A promise.
 */

export const insertSession = (obj) => {
  return SessionSchema(obj).save();
};

/**
 * This function returns a promise that resolves to a single document from the Session collection.
 * @param filter - {
 * @returns A promise.
 */
export const getSession = (filter) => {
  return SessionSchema.findOne(filter);
};

/**
 * This function deletes a session from the database based on the filter passed in.
 * @param filter - {
 * @returns A promise.
 */
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
