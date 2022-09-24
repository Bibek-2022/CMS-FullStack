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
const client = new OAuth2Client(process.env.CLIENT_ID);

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    // const { token } = req.body;
    // const ticket = await client.verifyIdToken({
    //   idToken: token,
    //   audience: process.env.CLIENT_ID,
    // });
    // const { name, email, picture } = ticket.getPayload();
    // console.log(ticket.payload);
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }
});

export default route;
