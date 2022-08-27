import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 15,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      maxLength: 100,
    },
    dob: {
      type: Date,
      required: true,
      default: null,
    },
    Address: {
      type: String,
      maxLength: 50,
    },
    verificationCode: {
      type: String,
      maxLength: 50,
    },
    // refreshJWT: {
    //   type: String,
    //   default: "",
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("client_user", ClientSchema);
