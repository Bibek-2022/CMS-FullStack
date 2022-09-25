import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogleUser } from "../../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";

function GLogin() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [form, setForm] = useState("");
  const clientId =
    "386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    // console.log(res);
    setProfile(res.profileObj);
    // console.log(res.tokenId);
    const obj = {
      tokenId: res.tokenId,
    };
    loginGoogleUser(obj);
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
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );

  //  <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
}
export default GLogin;
