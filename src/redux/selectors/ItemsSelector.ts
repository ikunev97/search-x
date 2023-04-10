import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectIsLoading = createSelector(
  selectContent,
  (content) => content.itemsReducer.isLoading
);

export const selectHasError = createSelector(
  selectContent,
  (content) => content.itemsReducer.hasError
);

export const selectItems = createSelector(
  selectContent,
  (content) => content.itemsReducer.items
);
