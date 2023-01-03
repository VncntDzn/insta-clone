import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;
export const { SET_CURRENT_USER } = actions;
export default reducer;
