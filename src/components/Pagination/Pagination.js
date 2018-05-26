import React from 'react';
import './Pagination.css';

export default function Pagination({total_pages, current_page, handlePageChange}) {
    return (
      <div className="pagination">
        {current_page !== 1 && <a onClick={() => handlePageChange(current_page-1)}>&laquo;</a>}
        <a>{current_page} of {total_pages}</a>
        {current_page !== total_pages && <a onClick={() => handlePageChange(current_page+1)}>&raquo;</a>}
      </div>
    );
}
