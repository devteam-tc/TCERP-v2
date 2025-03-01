"use client";

import styles from "./page.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <div className={styles.paginationNumbers}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? styles.active : ""}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;