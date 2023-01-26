import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileProps {
  preview: string;
  name: string;
}
interface UploadTypes {
  files: FileProps[];
}
const initialState: UploadTypes = {
  files: [],
};
const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    SET_FILES: (state, action: PayloadAction<FileProps[]>) => {
      state.files = [...state.files, ...action.payload];
    },
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = uploadSlice;
export const { SET_FILES } = actions;
export default reducer;
