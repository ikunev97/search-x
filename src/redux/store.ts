import {
  Action,
  AnyAction,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { persistedReducer } from "./rootReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, {}, AnyAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
