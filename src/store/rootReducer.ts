import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uploadSlice from "./slices/uploadSlice";

const rootReducer = combineReducers({
  user: userSlice,
  upload: uploadSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
