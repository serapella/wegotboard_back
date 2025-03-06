import styles from "../css_modules/sortBy.module.css";
import { BsGrid3X3 } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";

const SortBy = () => {
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
        <p>We found 29 items for you!</p>
      </div>
      <div>
        <select name="sortDropdown" id="sortDropdown">
          <option value="default">Sort By : Featured</option>
          <option value="popularity">Popularity</option>
          <option value="ascending">Price - Ascending</option>
          <option value="descending">Price - Descending</option>
          <option value="new-arrivals">New Arrivals</option>
          <option value="rating">Best Rating</option>
        </select>
      </div>
    </div>
  );
};
export default SortBy;
