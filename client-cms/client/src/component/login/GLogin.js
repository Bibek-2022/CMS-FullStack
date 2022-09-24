import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

// or
// import { GoogleLogin } from "react-google-login";

export const GLogin = () => {
  const handleLogin = async (googleData) => {
    console.log(googleData);
    const res = await fetch("http://localhost:8001/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
    });
    const data = await res.json();
    // store returned user in a context?
  };
  return (
    <div>
      <GoogleLogin
        clientId="620124268448-q0ntnjshpmf175ol52dcn6hc6va0pqtn.apps.googleusercontent.com"
        buttonText="Login"
        className="ct-button ct-button--secondary"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
