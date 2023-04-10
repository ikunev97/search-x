import { combineReducers } from "@reduxjs/toolkit";
import items from "./slices/ItemsSlice";
import recentlyItems from "./slices/RecentlyItemsSlice";
import searchedItems from "./slices/SearchedItemsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  itemsReducer: items,
  recentlyItemsReducer: recentlyItems,
  searchedItemsReducer: searchedItems,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["itemsReducer", "searchedItemsReducer"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
