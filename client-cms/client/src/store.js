import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./component/login/loginSlicer";

const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
export default store;
