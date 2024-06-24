import React from 'react';

const Paginate = ({page, setPage, total}) => {

    const handleLess = (num) => {
        if (page > num) {
            setPage(page - num);
        } else {
            setPage(total);
        }
    }

    const handlePlus = (num) => {
        if (page <= total-num) {
            setPage(page + num);
        } else {
            setPage(1);
        }
    }

    const handlePageClick = (pageNum) => {
        setPage(pageNum);
      };

    const range = 7; // Number of pages to show in pagination
    const startPage = Math.floor((page - 1) / range) * range + 1;
    const endPage = Math.min(startPage + range - 1, total);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="pagination">
      <button className="pagination-button" onClick={() => handleLess(1)}>{'<'}</button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`pagination-page ${page === num ? "active" : ""}`}
          onClick={() => handlePageClick(num)}
        >
          {num}
        </button>
      ))}
      <button className="pagination-button" onClick={() => handlePlus(1)}>{'>'}</button>
    </div>
  )
}

export default Paginate;