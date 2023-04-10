import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectIsSearchedItemsLoading,
  selectPage,
  selectSearchedItems,
  selectSearchedItemsHasError,
  selectSearchedItemsInfo,
  selectTimeToPerformSearch,
} from "../../redux/selectors/SearchedItemsSelector";
import { getItemsByPage, getSearchedItems } from "../../services/SearchService";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import {
  ItemWrapper,
  ItemInfoHolder,
  Wrapper,
  ItemsInfoWrapper,
} from "./styles/ItemsStyles";
import Pagination from "../../common/Pagination";
import { Loading } from "../../common/Loading";
import { NoResults } from "../../common/NoResults";

export const Items = () => {
  const { searchedItem } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    searchedItem && dispatch(getSearchedItems(searchedItem));
  }, [dispatch, searchedItem]);

  const items = useSelector(selectSearchedItems);
  const itemsInfo = useSelector(selectSearchedItemsInfo);
  const timeToPerformSearch = useSelector(selectTimeToPerformSearch);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsSearchedItemsLoading);
  const hasError = useSelector(selectSearchedItemsHasError);

  const handleChangeNextPage = () => {
    dispatch(getItemsByPage(itemsInfo.next));
  };

  const handleChangePrevPage = () => {
    dispatch(getItemsByPage(itemsInfo.prev));
  };

  if (isLoading && !hasError) return <Loading />;

  if (hasError) return <NoResults />;

  return (
    <>
      <ItemsInfoWrapper>
        {page && Number(page) > 1 && <span>Page {page} of</span>}{" "}
        {itemsInfo.count} results {`(${timeToPerformSearch / 100} seconds)`}
      </ItemsInfoWrapper>
      <Wrapper>
        {items &&
          items.map((item) => {
            return (
              <ItemWrapper
                key={item.id}
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <img src={item.image} alt={item.name} />
                <ItemInfoHolder>
                  <p>
                    Name:<span>{item.name}</span>
                  </p>
                  <p>
                    Status:<span>{item.status}</span>
                  </p>
                </ItemInfoHolder>
              </ItemWrapper>
            );
          })}
      </Wrapper>
      {items && items.length > 0 ? (
        <Pagination
          info={itemsInfo}
          handleChangeNextPage={handleChangeNextPage}
          handleChangePrevPage={handleChangePrevPage}
        />
      ) : null}
    </>
  );
};
