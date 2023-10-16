import { useState } from "react";

const Filters = ({ setFilter }) => {
  const [price, setPrice] = useState(0);
  const handleChangeRange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
    setFilter((prev) => ({
      ...prev,
      minPrice: price,
    }));
  };
  const handleChangeSelect = (e) => {
    e.preventDefault();
    setFilter((prev) => ({
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
          onChange={handleChangeRange}
        />
        <span>{price}</span>
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
