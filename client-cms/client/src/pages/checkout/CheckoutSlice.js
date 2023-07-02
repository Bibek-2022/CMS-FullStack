import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkout: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckout: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

const { reducer, actions } = checkoutSlice;
export const { setCheckout } = actions;
export default reducer;
