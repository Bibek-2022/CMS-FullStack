import React, { useState } from "react";
import { otpRequest, resetPassword } from "../../helpers/axiosHelper";

import { useLocation, useNavigate } from "react-router-dom";

export const EmailOTP = () => {
  const [showForm, setShowForm] = useState("otp"); // otp || password
  const [email, setEmail] = useState("");
  const [form, setForm] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await otpRequest(email);
    result.status === "success" &&
      setShowForm("reset") &&
      alert(result.message);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, otp } = form;
    const result = await resetPassword({ ...email, otp, password });
    result.status === "success" && alert(result.message) && navigate("/");
  };
  return showForm === "otp" ? (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content p-4">
          <h3 className="Auth-form-title">Enter your Email </h3>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="email"
              className="form-control mt-1"
              placeholder="Email"
              onChange={handleOnChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleResetPassword}>
        <div className="Auth-form-content p-4">
          <h3 className="Auth-form-title">Reset Your Password </h3>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="otp"
              className="form-control mt-1"
              placeholder="OTP"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="password"
              className="form-control mt-1"
              placeholder="New Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="confirmPassword"
              className="form-control mt-1"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
