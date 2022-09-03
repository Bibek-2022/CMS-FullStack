import React from "react";

export const ResetPassword = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content p-4">
          <h3 className="Auth-form-title">Enter your Email </h3>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="fName"
              className="form-control mt-1"
              placeholder="Email"
              //   onChange={handleOnChange}
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
