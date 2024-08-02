import React, { useState } from 'react';
import Item from './MemoChild'; // Import the memoized Item component

const MemoParent = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [count, setCount] = useState(0); // Additional state for demonstrating non-prop changes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Increment Count
      </button>
      <p>Count: {count}</p>
      <ul className="list-disc ml-4">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MemoParent;
