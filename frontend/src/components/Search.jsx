import React, { useState, memo } from 'react';

const Search = memo(({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onSearch(value);
  };

  console.log('Search component rendered');

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
});

export default Search;
