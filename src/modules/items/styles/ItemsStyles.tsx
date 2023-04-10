import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0 4px 9px rgb(0 0 0 / 30%);
  margin: 0 0 20px 0;
  cursor: pointer;
  img {
    height: 100px;
    width: 100px;
  }
`;

export const ItemInfoHolder = styled.div`
  padding: 10px;
  p {
    margin-bottom: 5px !important;
    font-size: 15px;
    color: #222222;
    opacity: 0.6;
    span {
      font-weight: 800;
      margin-left: 5px;
    }
  }
`;

export const ItemsInfoWrapper = styled.div`
  width: 100%;
  padding: 0 15px 15px 15px;
  font-weight: bold;
  font-size: 15px;
`;

export const ItemHolder = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  box-shadow: 0 4px 9px rgb(0 0 0 / 30%);
  margin: 0 0 20px 0;
  cursor: pointer;
  img {
    height: 200px;
    width: 200px;
  }
`;

export const SingleItemWrapper = styled.div`
  padding-left: 15px;
`;
