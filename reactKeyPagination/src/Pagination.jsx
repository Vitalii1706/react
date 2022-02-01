import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemPerPage }) => {
  console.log({ goPrev, goNext, currentPage, totalItems, itemPerPage });
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems / itemPerPage > currentPage;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;