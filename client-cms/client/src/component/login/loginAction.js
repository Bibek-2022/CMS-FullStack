import { loginUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginSlice";

export const loginAction = (obj) => async (dispatch) => {
  const results = loginUser(obj);
  toast.promise(results, {
    pending: "Please Wait",
  });

  const { status, message, result } = await results;
  toast[status](message);

  if (status === "success") {
    dispatch(login(result));
  }
};
