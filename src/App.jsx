import { useState } from "react";
import Products from "./components/Products";
import { products } from "./data/data.json";
import Header from "./components/Header";
import Filters from "./components/Filters";
import useFilters from "./utils/useFilters";

function App() {
  const { filter, setFilter, getFilteredProducts } = useFilters();
  const filteredProducts = getFilteredProducts(products);
  return (
    <>
      <Header>
        <Filters filter={filter} setFilter={setFilter} />
      </Header>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
