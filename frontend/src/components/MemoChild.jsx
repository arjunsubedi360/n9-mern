import React, { memo } from 'react';

const Item = ({ item }) => {
  console.log('Item rendered:', item);
  return <li className="mt-2">{item}</li>;
};

export default Item;
