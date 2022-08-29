import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createNewUser } from "../../helpers/axiosHelper";

export const RegisterForm = () => {
  const origin = "/verify";
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    const response = createNewUser(rest);
    toast.promise(response, { pending: "Please wait ..." });
    const { status, message } = await response;
    console.log(status, message);
    toast[status](message);
    e.target.reset();
    status === "success" && (window.location.href = origin);
  };
  return (
    <div className="Auth-form-container tops">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              name="fName"
              className="form-control mt-1"
              placeholder="Enter First Name"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lName"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control mt-1"
              placeholder="Enter Date of Birth"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="Number"
              name="phone"
              className="form-control mt-1"
              placeholder="Enter Phone Number"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control mt-1"
              placeholder="Enter Address"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleOnChange}
            />
          </div>{" "}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control mt-1"
              placeholder="Confirm password"
              onChange={handleOnChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already Registered
            <Link to="/"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
