import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectRecentlySearchedItems = createSelector(
  selectContent,
  (content) => content.recentlyItemsReducer.recentlySearchedItems
);
