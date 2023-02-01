import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uploadSlice from "./slices/uploadSlice";
import modalSlice from "./slices/modalSlice";

const rootReducer = combineReducers({
  user: userSlice,
  upload: uploadSlice,
  modal: modalSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
