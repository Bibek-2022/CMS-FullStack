import React, { useState } from "react";
import { otpRequest } from "../../helpers/axiosHelper";

export const EmailOTP = () => {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await otpRequest(email);
    result.status === "success" && alert(result.message);
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content p-4">
          <h3 className="Auth-form-title">Enter your Email </h3>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="fName"
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
  );
};
