import React from "react";

export const GooglePassword = () => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // const result = await loginUser(form);
    dispatch(loginAction(form));
    result._id && (window.location.href = origin);
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content p-4">
          <h3 className="Auth-form-title">Enter your Password </h3>
          <div className="form-group mt-3 p-4">
            <input
              type="text"
              name="password"
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
