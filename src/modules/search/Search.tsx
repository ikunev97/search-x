import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  selectHasError,
} from "../../redux/selectors/ItemsSelector";
import { selectRecentlySearchedItems } from "../../redux/selectors/RecentlySearchedItemsSelector";
import { AppDispatch } from "../../redux/store";
import { getItems } from "../../services/SearchService";
import { Input, SearchInputHolder, SearchWrapper } from "./styles/SearchStyles";
import { SearchItems } from "./components/SearchItems";
import useDebounce from "../../hooks/useDebounce";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import {
  addToRecentyleSearchedItems,
  removeFromRecentyleSearchedItems,
} from "../../redux/slices/RecentlySearchedItemsSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { clearItems } from "../../redux/slices/ItemsSlice";

export const Search = () => {
  const navigate = useNavigate();
  const { searchedItem } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [searchItem, setSearchItem] = useState<string>("");
  const debouncedSearchItem = useDebounce(searchItem, 500);
  const inputRef = useRef<HTMLInputElement>(null);
  const items = useSelector(selectItems);
  const recentlySearchedItems = useSelector(selectRecentlySearchedItems);
  const hasError = useSelector(selectHasError);

  useEffect(() => {
    if (searchedItem) setSearchItem(searchedItem);
  }, [searchedItem]);

  useEffect(() => {
    inputRef.current?.focus();

    if (debouncedSearchItem !== "") {
      dispatch(getItems(debouncedSearchItem));
    } else {
      dispatch(clearItems());
    }
  }, [debouncedSearchItem, dispatch]);

  const handleClearSearchInput = () => {
    setSearchItem("");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && debouncedSearchItem !== "") {
      dispatch(
        addToRecentyleSearchedItems({
          id: uuidv4(),
          name: debouncedSearchItem,
        })
      );

      setIsComponentVisible(false);
      inputRef.current?.blur();
      navigate(`/items/${debouncedSearchItem}`);
    }
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDetectClickOutside(false);

  if (isComponentVisible) {
    inputRef.current?.focus();
  }

  const handleChangeItemName = (event: { target: HTMLInputElement }) => {
    setSearchItem(event.target.value);

    setIsComponentVisible(true);
  };

  const handleClick = (item?: string) => {
    setIsComponentVisible(false);
    navigate(`/items/${item || searchedItem}`);
  };

  const borderBottomRadius =
    isComponentVisible &&
    ((items && items.length > 0) || recentlySearchedItems.length > 0)
      ? "0"
      : "5px";

  return (
    <SearchWrapper>
      <SearchInputHolder>
        <Input
          style={{
            borderBottomLeftRadius: borderBottomRadius,
            borderBottomRightRadius: borderBottomRadius,
          }}
          ref={inputRef}
          onKeyDown={(e) => handleKeyDown(e)}
          onClick={() => setIsComponentVisible(true)}
          placeholder="Search..."
          type="text"
          onChange={handleChangeItemName}
          value={searchItem}
        />
        <button onClick={handleClearSearchInput}>X</button>
      </SearchInputHolder>

      {isComponentVisible && (
        <SearchItems
          hasError={hasError}
          handleClick={(item) => handleClick(item)}
          searchItem={searchItem}
          removeRecentlySearchedItem={(item) => {
            dispatch(removeFromRecentyleSearchedItems(item));
          }}
          recentlySearchedItems={recentlySearchedItems}
          itemsRef={ref as React.RefObject<HTMLDivElement>}
          items={items}
        />
      )}
    </SearchWrapper>
  );
};
