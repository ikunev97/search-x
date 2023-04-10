import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 25px 15px;
  font-weight: bold;
  color: red;
`;

export const NoResults = () => {
  return <Wrapper>No results</Wrapper>;
};
