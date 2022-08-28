import { createRequire } from "module";
const require = createRequire(import.meta.url);
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const link = `${process.env.DOMAIN}/admin-verification?e=${req.body.email}&c=${req.body.verificationCode}`;

const msg = {
  to: "bibekheroes@gmail.com",
  from: "shresthabibek2022@gmail.com", // Use the email address or domain you verified above
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: `<strong>Verification Email</strong> <br> <a href="${link}">Click here to verify</a>`,
};
//ES6
sgMail.send(msg).then(
  () => {},
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
