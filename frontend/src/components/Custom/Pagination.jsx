import React from 'react';

const Pagination = ({ pagination, onPageChange, onRowsPerPageChange }) => {
  const { total, hasNextPage, currentPage, totalPages } = pagination;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handleRowsPerPageChange = (event) => {
    onRowsPerPageChange(parseInt(event.target.value, 10));
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm">Show:</span>
        <select onChange={handleRowsPerPageChange} className="border border-gray-300 rounded-md">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
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
