import React, { useState, useEffect } from 'react';

const Pagination = ({ pagination, onPageChange, onRowsPerPageChange }) => {
  const { total, hasNextPage, currentPage, totalPages, limit } = pagination;

  // State to keep track of rows per page
  const [rowsPerPage, setRowsPerPage] = useState(limit || 10);

  // Update rowsPerPage when it changes from the parent component
  useEffect(() => {
    setRowsPerPage(limit || 10);
  }, [limit]);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    onRowsPerPageChange(newRowsPerPage);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Show:</span>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="border border-gray-300 rounded-md py-1 px-2 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Total:</span>
          <span className="text-sm font-bold text-gray-900">{total}</span>
        </div>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border border-gray-300 rounded-md ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
