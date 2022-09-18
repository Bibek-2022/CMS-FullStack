import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import productReducer from "./pages/product/productSlice";

const store = configureStore({
  reducer: {
    user: loginReducer,
    products: productReducer,
  },
});
export default store;
