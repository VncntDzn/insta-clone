import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});
// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;
export default reducer;
