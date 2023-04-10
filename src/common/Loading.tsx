import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  border-top: 8px solid #c0e1f2;
  border-right: 8px solid #c0e1f2;
  border-bottom: 8px solid #c0e1f2;
  border-left: 8px solid #185574;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Loading = () => {
  return <Spinner />;
};
