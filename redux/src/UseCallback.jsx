import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

function UseCallBackFunc() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

export default UseCallBackFunc;