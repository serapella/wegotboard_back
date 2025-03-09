import style from "../css_modules/searchbar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form className={style.search}>
      <input type="text" placeholder="Search for items..." />
      <select name="dropdown" id="dropdown">
        <option value="all">All Categories</option>
        <option value="board">Boardgames</option>
        <option value="card">Cardgames</option>
        <option value="dice">Dicegames</option>
      </select>

      <button>
        <i>
          <BsSearch />
        </i>
      </button>
    </form>
  );
};

export default SearchBar;
