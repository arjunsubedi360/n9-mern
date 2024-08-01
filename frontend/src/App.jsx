import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("I am running");
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count, name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName("Arjun")}>Name changed</button>
    </div>
  );
}

export default App;
