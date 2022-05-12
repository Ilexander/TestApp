/* eslint-disable no-useless-escape */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validate } from "../scripts/scripts";

type Data = {
  data: {
    name: any;
    phone: any;
  };
};

const validName = /^([а-яё]+|[a-z]+)$/i;
const validPhone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

const initialState: Data = {
  data: {
    name: NaN,
    phone: NaN,
  },
};

export const dataSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.data.name = action.payload;
      if (!validate(validName, action.payload)) {
        state.data.name = false;
      }

      if (action.payload.length === 0) {
        state.data.name = null;
      }
    },
    changePhone(state, action: PayloadAction<string>) {
      state.data.phone = action.payload;
      if (!validate(validPhone, action.payload)) {
        state.data.phone = false;
      } else if (action.payload.length > 13) {
        state.data.phone = undefined;
      }

      if (action.payload.length === 0) {
        state.data.phone = null;
      }
    },
  },
});

export const { changeName, changePhone } = dataSlice.actions;

export default dataSlice.reducer;
