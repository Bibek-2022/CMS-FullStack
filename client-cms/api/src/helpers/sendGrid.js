import { createRequire } from "module";
const require = createRequire(import.meta.url);
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

export const sendEmailVerification = async (obj) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const link = `${process.env.DOMAIN}/admin-verification?e=${obj.email}&c=${obj.verificationCode}`;

  const msg = {
    to: obj.email, // Change to your recipient
    from: "shresthabibek2022@gmail.com", // Use the email address or domain you verified above
    subject: "Account verification required",
    text: "Please follow the link to activate your account.",
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
};

export const sendOTP = async (obj) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: obj.email, // Change to your recipient
    from: "shresthabibek2022@gmail.com", // Use the email address or domain you verified above
    subject: "OTP for Password Reset",
    text: "Please follow the link to reset your password.",
    html: `<strong>OTP</strong> <br> <p>${obj.otp}</p>`,
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
};

export const notification = async (obj) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: obj.email, // Change to your recipient
    from: "shresthabibek2022@gmail.com", // Use the email address or domain you verified above
    subject: `${obj.subject}`,
    text: "Notification",
    html: `<strong>OTP</strong> <br> <p>${obj.text}</p>`,
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
};
