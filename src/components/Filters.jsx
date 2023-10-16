import useFilters from "../utils/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();
  console.log(filters);
  const handleChangeRange = (e) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      minPrice: e.target.value,
    }));
  };
  const handleChangeSelect = (e) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label htmlFor="range">Price</label>
        <input
          type="range"
          name="range"
          id="range"
          min="0"
          max="1500"
          value={filters.minPrice}
          onChange={handleChangeRange}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="">Categories</label>
        <select name="categories" id="categories" onChange={handleChangeSelect}>
          <option value="all">Todas</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
