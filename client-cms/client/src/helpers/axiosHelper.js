import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const registerEP = "http://localhost:8001/api/v1/register";
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
