import styles from "../css_modules/pagination.module.css";
import { setCurrentPage } from "../store/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.productGrid
  );
  return (
    <div className={styles.gridPagination}>
      <button
        onClick={() => {
          dispatch(setCurrentPage(currentPage - 1));
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          console.log(page),
          (
            <button
              key={page}
              onClick={() => {
                dispatch(setCurrentPage(page));
              }}
            >
              {page}
            </button>
          )
        )
      )}
      <button
        onClick={() => {
          dispatch(setCurrentPage(currentPage + 1));
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
