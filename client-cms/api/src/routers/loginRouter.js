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
        if (result.status === "active") {
          return res.json({
            status: "success",
            message: "Login success",
            result,
          });
        } else {
          return res.json({
            status: "error",
            message:
              "Your account is inactive, Please check your email and follow the instruction to very the account.",
          });
        }
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

//return new accessJWT based on the accessJWT given
route.get("/accessjwt", async (req, res, next) => {
  try {
    //receive authorization token, refreshJWT
    const { authorization } = req.headers;
    if (authorization) {
      const decoded = await verifyRefreshJWT(authorization);

      if (decoded?.email) {
        const user = await getOneAdmin({
          email: decoded.email,
          refreshJWT: authorization,
        });

        if (user?._id) {
          const accessJWT = await signAccessJWT({ email: decoded.email });
          return res.json({
            status: "success",
            accessJWT,
          });
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "unauthorized",
    });
  } catch (error) {
    next(error);
  }
});
export default route;
