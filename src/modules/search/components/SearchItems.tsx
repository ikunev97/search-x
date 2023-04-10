import { NoResults } from "../../../common/NoResults";
import { RecentlySearchedItemIcon } from "../../../common/RecentlySearchedItemIcon";
import { SearchItemIcon } from "../../../common/SearchItemIcon";
import { IItemResult, IRecentlySearchedItem } from "../../../types";
import {
  SearchItem,
  SearchItemsHolder,
  RecentlySearchItemsHolder,
  RecentlySearchedItems,
} from "../styles/SearchStyles";

type ISearchItems = {
  items: IItemResult[];
  itemsRef: React.RefObject<HTMLDivElement>;
  recentlySearchedItems: IRecentlySearchedItem[];
  removeRecentlySearchedItem: (item: IRecentlySearchedItem) => void;
  searchItem: string;
  handleClick: (item?: string) => void;
  hasError: string;
};

export const SearchItems = ({
  items,
  itemsRef,
  recentlySearchedItems,
  removeRecentlySearchedItem,
  searchItem,
  handleClick,
  hasError,
}: ISearchItems) => {
  const makeBold = (item: string, keyword: string) => {
    var re = new RegExp(keyword, "g");
    return item.replace(re, "<i>" + keyword + "</i>");
  };
  const borderBottom = items && items.length > 0 ? "0px" : "2px solid #4ba9c8";
  const filteredItems = recentlySearchedItems.filter((item) =>
    item.name.includes(searchItem)
  );

  return (
    <div style={{ background: "#ffff" }} ref={itemsRef}>
      {recentlySearchedItems.length > 0 && (
        <RecentlySearchItemsHolder
          style={{
            borderBottom: borderBottom,
          }}
        >
          {hasError && filteredItems.length === 0 && <NoResults />}
          {filteredItems.slice(0, searchItem ? 5 : 10).map((item) => {
            return (
              <div onClick={() => handleClick(item.name)} key={item.id}>
                <RecentlySearchedItems>
                  <SearchItem isRecentlySearchedItem={true}>
                    <RecentlySearchedItemIcon />
                    <div
                      className="text-bold"
                      dangerouslySetInnerHTML={{
                        __html: makeBold(
                          item.name.toLocaleLowerCase(),
                          searchItem
                        ),
                      }}
                    />
                  </SearchItem>
                  <button
                    onClick={(event) => {
                      event?.stopPropagation();
                      removeRecentlySearchedItem(item);
                    }}
                  >
                    Remove
                  </button>
                </RecentlySearchedItems>
              </div>
            );
          })}
        </RecentlySearchItemsHolder>
      )}

      {items && items.length > 0 && (
        <SearchItemsHolder>
          {items.slice(0, 10 - filteredItems.length).map((item) => {
            return (
              <SearchItem onClick={() => handleClick(item.name)} key={item.id}>
                <SearchItemIcon />
                <div
                  className="text-bold"
                  dangerouslySetInnerHTML={{
                    __html: makeBold(item.name.toLocaleLowerCase(), searchItem),
                  }}
                />
              </SearchItem>
            );
          })}
        </SearchItemsHolder>
      )}
    </div>
  );
};
