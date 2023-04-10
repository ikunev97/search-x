import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectIsSearchedItemsLoading = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.isLoading
);

export const selectSearchedItemsHasError = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.hasError
);

export const selectSearchedItems = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.searchedItems
);

export const selectSearchedItemsInfo = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.searchedItemsInfo
);

export const selectTimeToPerformSearch = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.timeToPerformSearch
);

export const selectPage = createSelector(
  selectContent,
  (content) => content.searchedItemsReducer.page
);
