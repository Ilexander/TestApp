import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Modal = {
  modalStatus: string;
};

const initialState: Modal = {
  modalStatus: "close",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeStatus(state, action: PayloadAction<string>) {
      state.modalStatus = action.payload;
    },
  },
});

export const { changeStatus } = modalSlice.actions;

export default modalSlice.reducer;
