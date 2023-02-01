import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FileProps {
  preview: string;
  name: string;
  path?: string;
}
interface ModalTypes {
  isOpen: boolean;
  modalType: string;
}
const initialState: ModalTypes = {
  isOpen: false,
  modalType: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OPEN_MODAL: (state, action: PayloadAction<ModalTypes>) => {
      state.isOpen = true;
    },
    CLOSE_MODAL: (state, action: PayloadAction<ModalTypes>) => {
      state.isOpen = false;
    },
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = modalSlice;
export const { OPEN_MODAL, CLOSE_MODAL } = actions;
export default reducer;
