import { useContext } from "react";
import { FiltersContext } from "../context/filterContext";

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const getFilteredProducts = (products) => {
    return products.filter(
      (product) =>
        product.price > filters.minPrice &&
        (filters.category == "all" || product.category == filters.category)
    );
  };
  return { filters, setFilters, getFilteredProducts };
};

export default useFilters;
