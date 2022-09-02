import React from "react";

export const ResetPassword = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Enter your Email </h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              name="fName"
              className="form-control mt-1"
              placeholder="Email"
              //   onChange={handleOnChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
