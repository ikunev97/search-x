import { Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import { Search } from "./modules/search/Search";
import { Items } from "./modules/items/Items";
import { Item } from "./modules/items/components/Item";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route
        path="/items/:searchedItem"
        element={
          <Layout>
            <Items />
          </Layout>
        }
      />
      <Route
        path="/item/:id"
        element={
          <Layout>
            <Item />
          </Layout>
        }
      />
    </Routes>
  );
};
