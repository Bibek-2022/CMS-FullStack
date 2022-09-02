import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { setUser } = actions;
export default reducer;
