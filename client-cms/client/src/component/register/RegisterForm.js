import React from "react";

export const RegisterForm = () => {
  return (
    <div className="Auth-form-container tops">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              className="form-control mt-1"
              placeholder="Enter First Name"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control mt-1"
              placeholder="Enter Date of Birth"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="Number"
              name="phone"
              className="form-control mt-1"
              placeholder="Enter Phone Number"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control mt-1"
              placeholder="Enter Address"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              //   onChange={handleOnChange}
            />
          </div>{" "}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control mt-1"
              placeholder="Confirm password"
              //   onChange={handleOnChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">Already Registered</p>
        </div>
      </form>
    </div>
  );
};
