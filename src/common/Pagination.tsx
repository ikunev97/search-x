import React from "react";
import styled from "styled-components";

const PaginationHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 20px;
  button {
    width: 100%;
    max-width: 130px;
    font-size: 15px;
    border: 1px solid #e5e5e5;
    text-align: center;
    cursor: pointer;
    font-weight: 400;
    padding: 8px;
    border-radius: 5px;
    background: inherit;
    &:hover {
      background: #d8d8d8 !important;
      color: white !important;
    }
  }
`;

const DisabledBtn = styled.button`
  cursor: not-allowed !important;
`;

interface IPagination {
  info: { prev: string; next: string };
  handleChangeNextPage: () => void;
  handleChangePrevPage: () => void;
}

const Pagination: React.FC<IPagination> = ({
  handleChangeNextPage,
  info,
  handleChangePrevPage,
}) => {
  return (
    <PaginationHolder>
      {info.prev !== null ? (
        <button onClick={handleChangePrevPage}>Prev</button>
      ) : (
        <DisabledBtn>Prev</DisabledBtn>
      )}
      {info.next !== null ? (
        <button onClick={handleChangeNextPage}>Next</button>
      ) : (
        <DisabledBtn>Next</DisabledBtn>
      )}
    </PaginationHolder>
  );
};

export default Pagination;
