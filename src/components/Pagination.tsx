import styles from "../css_modules/pagination.module.css";
import React from "react";
// import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
    const handleNextPage = () => {
      if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    let pageNumbers = [currentPage];
    if (currentPage === 1) {
      pageNumbers = [1, 2, 3].filter((page) => page <= totalPages);
    } else if (currentPage === totalPages) {
      pageNumbers = [totalPages - 2, totalPages - 1, totalPages].filter(
        (page) => page >= 1
      );
    } else {
      pageNumbers = [currentPage - 1, currentPage, currentPage + 1].filter(
        (page) => page <= totalPages
      );
    }

    return (
      <div className={styles.gridPagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {pageNumbers.map((page) => (
          <button key={page} onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };
};

export default Pagination;
