import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../helpers/axiosHelper";

export const LoginForm = () => {
  const [form, setForm] = useState({});

  const origin = "/dashboard";
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await loginUser(form);
    result._id && (window.location.href = origin);
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
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
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="d-flex justify-content-between mt-2">
            <div>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};
