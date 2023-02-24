import { createSlice } from "@reduxjs/toolkit";

interface FileTypeExtension {
  type: HTMLImageElement | HTMLVideoElement | string;
}
export interface FileProps {
  preview: string;
  name: string;
  path?: string;
  type?: FileTypeExtension[];
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
    SET_FILES: (state, action) => {
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
