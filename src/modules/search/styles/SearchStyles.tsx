import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 20px 15px 20px 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Input = styled.input`
  border: 1px solid #e5e5e5;
  position: relative;
  padding: 8px;
  background: "#ffffff";
  border-radius: 5px;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  ::placeholder {
    font-size: 15px;
    opacity: 0.4;
  }
  &:focus {
    border: 2px solid #4ba9c8;
  }
`;

export const SearchInputHolder = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  align-items: center;
  button {
    position: absolute;
    right: 15px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const SearchItemsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
  border: 2px solid #4ba9c8;
  border-top: none;
  padding-top: 15px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const RecentlySearchedItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: "#fffff";
  &:hover {
    background: #efefef;
  }
  button {
    font-size: 15px;
    padding: 0 8px 0 8px;
    cursor: pointer;
  }
`;

export const RecentlySearchItemsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
  border: 2px solid #4ba9c8;
  border-top: none;
  border-bottom: none;
  padding-top: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

export const SearchItem = styled.div.attrs(
  (props: { isRecentlySearchedItem: boolean }) => props
)`
  padding: 10px 8px 10px 8px;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${(props) => (props.isRecentlySearchedItem ? "#55165e" : "black")};
  svg {
    margin-right: 6px;
  }
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #efefef;
  }
`;
