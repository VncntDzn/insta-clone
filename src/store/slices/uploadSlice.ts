import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FileProps {
  preview: string;
  name: string;
  path?: string;
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
    REMOVE_FILE: (state, action) => {
      const index = state.files.indexOf(action.payload.index);
      state.files.splice(index, 1);
    },
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = uploadSlice;
export const { SET_FILES, REMOVE_FILE } = actions;
export default reducer;
