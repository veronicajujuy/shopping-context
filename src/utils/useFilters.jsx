import { useState } from "react";

const useFilters = () => {
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
  return { filter, setFilter, getFilteredProducts };
};

export default useFilters;
