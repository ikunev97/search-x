import axios from "axios";
import { ITEMS_URL } from "../constants";
import { setError, setItems, setLoading } from "../redux/slices/ItemsSlice";
import { AppThunk } from "../redux/store";
import {
  setPage,
  setSearchedItems,
  setSearchedItemsError,
  setSearchedItemsLoading,
  setTimeToPerformSearch,
} from "../redux/slices/SearchedItemsSlice";

export const getItems =
  (name: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`${ITEMS_URL}?name=${name}`);
      if (response) {
        dispatch(setLoading(false));
        dispatch(setItems(response.data));
      }
    } catch (error: any) {
      if (error instanceof Error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message));
      }
    }
  };

export const getSearchedItems =
  (name: string): AppThunk =>
  async (dispatch) => {
    const start = Date.now();
    dispatch(setSearchedItemsLoading(true));
    try {
      const response = await axios.get(`${ITEMS_URL}?name=${name}`);
      if (response) {
        let end;
        end = Date.now();
        dispatch(setTimeToPerformSearch(end - start));
        dispatch(setSearchedItemsLoading(false));
        dispatch(setSearchedItems(response.data));
      }
    } catch (error: any) {
      if (error instanceof Error) {
        setSearchedItemsLoading(false);
        dispatch(setSearchedItemsError(error.message));
      }
    }
  };

export const getItemsByPage =
  (url: string): AppThunk =>
  async (dispatch) => {
    const start = Date.now();
    dispatch(setSearchedItemsLoading(true));
    try {
      const response = await axios.get(url);

      if (response) {
        let end;
        end = Date.now();
        dispatch(setTimeToPerformSearch(end - start));
        dispatch(setSearchedItemsLoading(false));
        dispatch(setSearchedItems(response.data));
        dispatch(setPage(url && url.match(/page=(\d+)/i)?.[1]));
      }
    } catch (error: any) {
      if (error instanceof Error) {
        setSearchedItemsLoading(false);
        dispatch(setSearchedItemsError(error.message));
      }
    }
  };

export async function getItem(id: number) {
  try {
    const response = await axios.get(`${ITEMS_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
