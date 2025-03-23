import styles from "../css_modules/sortBy.module.css";
import { BsGrid3X3 } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSelectedSort } from "../store/sortSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SortBy = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productGrid);

  return (
    <div className={styles.productSorting}>
      <div>
        <button>
          <i>
            <BsGrid3X3 />
          </i>
        </button>
        <button>
          <i>
            <BsListTask />
          </i>
        </button>
        <p>We found {products.length} items for you!</p>
      </div>
      <div>
        <select
          name="sortDropdown"
          id="sortDropdown"
          defaultValue="default"
          onChange={(e) => dispatch(setSelectedSort(e.target.value))}
        >
          <option value="default">Sort By : Featured</option>
          {/* <option value="popularity">Popularity</option> */}
          <option value="ascending">Price - Ascending</option>
          <option value="descending">Price - Descending</option>
          {/* <option value="new-arrivals">New Arrivals</option> */}
          <option value="rating">Best Rating</option>
        </select>
      </div>
    </div>
  );
};
export default SortBy;
