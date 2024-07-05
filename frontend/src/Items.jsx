import React, { useState, useEffect } from 'react';

function ItemManager() {
  const [items, setItems] = useState([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
//   const [newItemName, setNewItemName] = useState('');

  // useEffect for logging on first mount
//   useEffect(() => {
//     console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []);

  // useEffect for logging on every state change
  useEffect(() => {
    console.log('Items state changed:', items);
  });

  // useEffect for logging based on dependencies
//   useEffect(() => {
//     console.log('New item name changed:', newItemName);
//   }, [newItemName]);

//   const addItem = () => {
//     if (newItemName.trim()) {
//       setItems([...items, { id: items.length + 1, name: newItemName }]);
//       setNewItemName('');
//     }
//   };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Item Manager</h1>
      {/* <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="New item name"
      /> */}
      {/* <button onClick={addItem}>Add Item</button> */}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemManager;
