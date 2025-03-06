import styles from "../css_modules/sortBy.module.css";

const SortBy = () => {
  return (
    <div className={styles.productSorting}>
      <div>
        <button>
          <i>1</i>
        </button>
        <button>
          <i>2</i>
        </button>
        <p>We found 29 items for you!</p>
      </div>
      <div>
        <select name="sortDropdown" id="sortDropdown">
          <option value="default">Sort By : Featured</option>
          <option value="sale">On Sale</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descening</option>
        </select>
      </div>
    </div>
  );
};
export default SortBy;
