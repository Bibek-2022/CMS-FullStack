import { loginUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginSlice";

export const loginAction = (obj) => async (dispatch) => {
  const results = await loginUser(obj);
  //   toast.promise(results, {
  //     pending: "Please Wait",
  //   });
  console.log(results);
  const { status, message, result } = results;
  //   toast[status](message);

  if (status === "success") {
    dispatch(setUser(result));
  }
};
