import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { createNewUser } from "../models/clientUser/ClientModel.js";
import { v4 as uuidv4 } from "uuid";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;
    const result = await createNewUser(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Please verify your account",
        result,
      });
    }
    res.json({
      status: "error",
      message: "Unable to create user",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }
});

export default route;
