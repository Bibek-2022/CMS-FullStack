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
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(
  "620124268448-q0ntnjshpmf175ol52dcn6hc6va0pqtn.apps.googleusercontent.com"
);

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { tokenId } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // const { name, email, picture } = ticket.getPayload();
    console.log(payload);
    // const { email, givenName, familyName, googleId } = req.body;
    // console.log(email, givenName, familyName);
    // const obj = {
    //   email: email,
    //   fName: givenName,
    //   lName: familyName,
    //   password: "12345",
    // };
    // const result = await createNewUser(obj);
    // if (result?._id) {
    //   return res.json({
    //     status: "success",
    //     message: "Please verify your account",
    //     result,
    //   });
    // }
    // res.json({
    //   status: "error",
    //   message: "Unable to create user",
    // });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }
});

export default route;
