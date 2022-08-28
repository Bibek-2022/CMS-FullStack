import express from "express";
import { comparePassword } from "../helpers/bcryptHelper.js";
import { getOneUser } from "../models/clientUser/ClientModel.js";

const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const result = await getOneUser({ email });
    if (result._id) {
      const compare = comparePassword(password, result.password);
      result.password = undefined;
      if (compare) {
        res.status(200).json({
          status: "success",
          message: "Login success",
          result,
        });
      } else {
        res.status(400).json({
          status: "error",
          message: "Please activate your account",
        });
      }
    }
    res.json({
      status: "error",
      message: "Invalid email or password",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
