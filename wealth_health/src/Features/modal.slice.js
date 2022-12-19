import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {},
});

export const { action } = modalSlice.actions;

export default modalSlice.reducer;
