import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecentlySearchedItem } from "../../types";

export type RecentlySearchedItemsState = {
  recentlySearchedItems: IRecentlySearchedItem[];
};

const initialState: RecentlySearchedItemsState = {
  recentlySearchedItems: [],
};

const recentlySearchedItemsSlice = createSlice({
  name: "recentlySearchedItems",
  initialState,
  reducers: {
    addToRecentyleSearchedItems: (
      state,
      action: PayloadAction<IRecentlySearchedItem>
    ) => {
      if (
        !state.recentlySearchedItems
          .map((item) => item.name)
          .includes(action.payload.name)
      ) {
        state.recentlySearchedItems.push(action.payload);
      }
      state.recentlySearchedItems = [...state.recentlySearchedItems];
    },
    removeFromRecentyleSearchedItems: (
      state,
      action: PayloadAction<IRecentlySearchedItem>
    ) => {
      state.recentlySearchedItems = state.recentlySearchedItems.filter(
        (item: IRecentlySearchedItem) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToRecentyleSearchedItems, removeFromRecentyleSearchedItems } =
  recentlySearchedItemsSlice.actions;

export default recentlySearchedItemsSlice.reducer;
