import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
    const [num, setNum] = useState(0)
  const computeFactorial = (n) => {
    console.log('Computing factorial...');
    return n <= 0 ? 1 : n * computeFactorial(n - 1);
  };

  const factorial = useMemo(() => computeFactorial(num), [num]);

  return (
    <div>
      <p>Factorial of {num} is {factorial}</p>
      <button onClick={()=> setNum(10000000)}></button>
    </div>
  );
}

export default ExpensiveCalculation;