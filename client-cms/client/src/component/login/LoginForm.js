import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../helpers/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../../pages/login/loginAction";
import { GoogleLogin } from "react-google-login";
import GLogin from "./GLogin";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [form, setForm] = useState({});

  useEffect(() => {
    user._id && navigate(origin);
  }, [user, navigate]);

  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/";
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  // google login
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // store returned user somehow
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
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          /> */}
          <GLogin />
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
