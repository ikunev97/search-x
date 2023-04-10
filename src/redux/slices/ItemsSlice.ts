import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, IItemResult } from "../../types";

export type ItemsState = {
  items: IItemResult[];
  isLoading: boolean;
  hasError: string;
};

const initialState: ItemsState = {
  items: [],
  isLoading: false,
  hasError: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<IItem>) => {
      state.isLoading = false;
      state.hasError = "";
      state.items = action.payload.results;
    },
    clearItems: (state) => {
      state.items = [];
    },
    setError: (state, action: PayloadAction<string>) => {
      state.hasError = action.payload;
      state.items = [];
    },
  },
});

export const { setLoading, setItems, setError, clearItems } =
  itemsSlice.actions;

export default itemsSlice.reducer;
