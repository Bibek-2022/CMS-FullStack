import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

// or
// import { GoogleLogin } from "react-google-login";

export const GLogin = () => {
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

  return (
    <div>
      <GoogleLogin
        clientId="620124268448-q0ntnjshpmf175ol52dcn6hc6va0pqtn.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
