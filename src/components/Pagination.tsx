import styles from "../css_modules/pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.gridPagination}>
      <button>Previous</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
