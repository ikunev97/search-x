import { ReactNode } from "react";
import styled from "styled-components";
import { Search } from "../modules/search/Search";

type ILayout = {
  children: ReactNode;
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 80px;
  padding-bottom: 40px;
  width: 100%;
`;

const SearchWrapper = styled.div`
  z-index: 20;
  position: relative;
`;

const Layout = ({ children }: ILayout) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Layout;
