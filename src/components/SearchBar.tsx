import { useDispatch } from "react-redux";
import style from "../css_modules/searchbar.module.css";
import { BsSearch } from "react-icons/bs";
import { setCategories, setSearch } from "../store/filterSlice";
import { redirect, useNavigate } from "react-router";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const search = formData.get("search") as string;
    const category = formData.get("category") as string;

    dispatch(setSearch(search));

    dispatch(setCategories(category));

    navigate("/products");
  };
  return (
    <form className={style.search} onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for items..." name="search" />
      <select id="category" name="category">
        <option value="all">All Categories</option>
        <option value="board-games">Board Games</option>
        <option value="card-games">Card Games</option>
        <option value="dice-games">Dice Games</option>
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
