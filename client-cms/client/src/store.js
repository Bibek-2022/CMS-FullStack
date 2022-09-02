import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";

const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
export default store;
