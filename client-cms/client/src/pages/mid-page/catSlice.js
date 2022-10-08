import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, { payload = [] }) => {
      state.category = payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const { setCategory } = actions;
export default reducer;
