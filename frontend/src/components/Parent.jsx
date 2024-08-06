import React, { useState, useCallback } from 'react';
import Search from './Search';

const ParentComponent = () => {
  const [query, setQuery] = useState('');
  const [items] = useState(['apple', 'banana', 'grape', 'orange', 'pineapple', 'strawberry']);
  const [count, setCount] = useState(0); // Additional state

  const handleSearch = useCallback((searchTerm) => {
    setQuery(searchTerm);
  }, []);

  const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fruit List</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Increment Count
      </button>
      <p>Count: {count}</p>
      <Search onSearch={handleSearch} />
      <ul className="list-disc ml-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="mt-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
