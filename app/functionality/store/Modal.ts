import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  box: string;
};

export const initialState: InitialState = {
  box: "",
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<any>) {
      state.box = action.payload.box;
    },
    setClose(state, action: PayloadAction<any>) {
      state.box = action.payload.box;
    },
  },
});

export const { setOpen, setClose } = modal.actions;

export default modal.reducer;
