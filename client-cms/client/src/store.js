import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import productReducer from "./pages/product/productSlice";
import categoryReducer from "./pages/mid-page/catSlice";

const store = configureStore({
  reducer: {
    user: loginReducer,
    products: productReducer,
    category: categoryReducer,
  },
});
export default store;
