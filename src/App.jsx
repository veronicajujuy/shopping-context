import { useState } from "react";
import Products from "./components/Products";
import { products } from "./data/data.json";
import Header from "./components/Header";

function App() {
  const [filter, setFilter] = useState({
    minPrice: 0,
    category: "all",
  });
  const getFilteredProducts = (products) => {
    return products.filter(
      (product) =>
        product.price > filter.minPrice &&
        (filter.category == "all" || product.category == filter.category)
    );
  };

  const filteredProducts = getFilteredProducts(products);
  return (
    <>
      <Header setFilter={setFilter} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
