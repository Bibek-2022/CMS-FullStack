import axios from "axios";
const rootUrl = "http://localhost:8002/api/v1";
const registerEP = "http://localhost:8002/api/v1/register";
const loginEP = "http://localhost:8002/api/v1/login";
const otpEP = rootUrl + "/register/otp";
const resetEP = rootUrl + "/register/new-password";
const productEP = "http://localhost:8000/api/v1/products";
const categoryEP = "http://localhost:8000/api/v1/category";
const googleEP = "http://localhost:8001/api/v1/auth/google";
const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    let message = error.message;
    return {
      status: "error",
      message,
    };
  }
};

export const createNewUser = (obj) => {
  return apiProcessor("post", registerEP, obj);
};

// verify user

export const emailVerification = (obj) => {
  return apiProcessor("patch", registerEP, obj);
};

// login User
export const loginUser = (obj) => {
  return apiProcessor("post", loginEP, obj);
};

// OTP request
export const otpRequest = (obj) => {
  return apiProcessor("post", otpEP, obj);
};

// reset password
export const resetPassword = (obj) => {
  return apiProcessor("patch", resetEP, obj);
};

//  Products

export const getProducts = () => {
  // const option = {
  //   method: "get",
  //   url: productEP,
  //   data: null,
  //   privateAPI: true,
  // };

  // return apiProcessor(option);
  return apiProcessor("get", productEP);
};
export const getsingleProduct = (_id) => {
  // const option = {
  //   method: "get",
  //   url: productEP + "/" + _id,
  //   privateAPI: true,
  // };

  // return apiProcessor(option);
  return apiProcessor("get", productEP, _id);
};

export const loginGoogleUser = (obj) => {
  // const option = {
  //   method: "get",
  //   url: productEP,
  //   data: null,
  //   privateAPI: true,
  // };

  // return apiProcessor(option);
  return apiProcessor("post", googleEP, obj);
};

//  Category

export const getCategory = () => {
  // const option = {
  //   method: "get",
  //   url: productEP,
  //   data: null,
  //   privateAPI: true,
  // };

  // return apiProcessor(option);
  return apiProcessor("get", categoryEP);
};
export const requestNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: loginEP + "/accessjwt",
    privateAPI: true,
    token: localStorage.getItem("refreshJWT"),
  };

  const { accessJWT } = await apiProcessor(option);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};
