import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogleUser, loginUser } from "../../helpers/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../../pages/login/loginAction";

function GLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [profile, setProfile] = useState([]);
  const [log, setLog] = useState([]);

  useEffect(() => {
    user._id && navigate(origin);
  }, [user, navigate]);

  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/";
  const clientId =
    "386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com";
  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // });

  const onSuccess = (res) => {
    // console.log(res);
    setProfile(res.profileObj);
    // console.log(res.tokenId);
    loginGoogleUser(profile);
  };
  const onSubmit = (res) => {
    setLog(res.profileObj);
    const { email, password: googleId } = res.profileObj;
    const form = {
      email,
      password,
    };
    dispatch(loginAction(form));
    result._id && (window.location.href = origin);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      <br></br>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSubmit}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      <hr></hr>

      <GoogleLogin
        clientId={clientId}
        buttonText="Sign up with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Log out"
        onLogoutSuccess={logOut}
      /> */}
    </div>
  );
}
export default GLogin;
