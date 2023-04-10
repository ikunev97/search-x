import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, IItemResult, ISearchedItemsInfo } from "../../types";

export type ItemsState = {
  searchedItems: IItemResult[];
  searchedItemsInfo: ISearchedItemsInfo;
  isLoading: boolean;
  hasError: string;
  timeToPerformSearch: number;
};

const initialState: ItemsState = {
  searchedItems: [],
  searchedItemsInfo: { prev: "", next: "", count: 0, pages: 0 },
  isLoading: false,
  hasError: "",
  timeToPerformSearch: 0,
};

const itemsSlice = createSlice({
  name: "searchedItems",
  initialState,
  reducers: {
    setSearchedItemsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSearchedItems: (state, action: PayloadAction<IItem>) => {
      state.isLoading = false;
      state.hasError = "";
      state.searchedItems = action.payload.results;
      state.searchedItemsInfo = action.payload.info;
    },

    setTimeToPerformSearch: (state, action: PayloadAction<number>) => {
      state.timeToPerformSearch = action.payload;
    },

    setSearchedItemsError: (state, action: PayloadAction<string>) => {
      state.hasError = action.payload;
      state.searchedItems = [];
    },
  },
});

export const {
  setSearchedItemsLoading,
  setSearchedItems,
  setSearchedItemsError,
  setTimeToPerformSearch,
} = itemsSlice.actions;

export default itemsSlice.reducer;
