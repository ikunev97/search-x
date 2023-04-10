export interface IItem {
  info: IItemInfo;
  results: IItemResult[];
}

export interface IItemInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IItemResult {
  id: number;
  name: string;
  status: string;
  image: string;
  url: string;
}

export interface IRecentlySearchedItem {
  id: string;
  name: string;
}

export interface ISearchedItemsInfo {
  prev: string;
  next: string;
  count: number;
  pages: number;
}
