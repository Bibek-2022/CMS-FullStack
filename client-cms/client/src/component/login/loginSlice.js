import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { login } = actions;
export default reducer;
