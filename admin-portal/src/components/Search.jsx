import React, { useState, memo } from 'react';

const Search = memo(({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
});

export default Search;
