import Filters from "./Filters";

const Header = ({ setFilter }) => {
  return (
    <div>
      <h1>Shopping</h1>
      <Filters filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Header;
