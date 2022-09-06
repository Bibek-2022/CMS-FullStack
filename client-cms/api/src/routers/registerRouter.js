import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  createNewUser,
  getOneUser,
  updateUser,
} from "../models/clientUser/ClientModel.js";
import { v4 as uuidv4 } from "uuid";
import {
  notification,
  sendEmailVerification,
  sendOTP,
} from "../helpers/sendGrid.js";
import { otpGenerator } from "../utils/otpGenerator.js";
import {
  deleteSession,
  insertSession,
} from "../models/session/SessionModel.js";
// import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";

const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;
    const result = await createNewUser(req.body);

    if (result?._id) {
      sendEmailVerification(result);
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

route.patch("/", async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    if (email && verificationCode) {
      const filter = { email, verificationCode };
      const obj = {
        status: "active",
        verificationCode: "",
      };

      const result = await updateUser(filter, obj);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "You account has been activated, you can now Sign in.",
        });
      }
    } else
      return res.json({
        status: "error",
        message: "Invalid or expired link",
      });

    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

// request for OTP
route.post("/otp", async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await getOneUser({ email });
    if (user?._id) {
      const otp = otpGenerator();

      const obj1 = {
        token: otp,
        associate: email,
        type: "updatePassword",
      };

      const result = await insertSession(obj1);
      if (result?._id) {
        let obj = {
          email,
          otp,
        };
        sendOTP(obj);
        return res.json({
          status: "success",
          message: "OTP sent to your email",
          otp,
        });
      }
    }
    res.json({
      status: "error",
      message: "OTP not sent",
      otp,
    });
  } catch (error) {
    next(error);
  }
});

// new password

route.patch("/new-password", async (req, res, next) => {
  try {
    const { email, password, otp } = req.body;
    const filter = {
      token: otp,
      associate: email,
      type: "updatePassword",
    };

    const isDeleted = await deleteSession(filter);
    if (isDeleted?._id) {
      const obj = {
        password: hashPassword(password),
      };
      const result = await updateUser({ email }, obj);
      if (result?._id) {
        notification({
          email,
          text: "Your password has been changed successfully. If this is not you, please contact us immediately.",
          subject: "Password Changed",
        });
        return res.json({
          status: "success",
          message: "Password updated successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

export default route;
