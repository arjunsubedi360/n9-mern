import React, { useEffect, useState } from "react";
// import DashboardPage from './components/DashboardPage';

function App() {
  const [name, setName] = useState(null);

  const handleChange = () => setName("Arjun");
  return (
    // <DashboardPage/>
    <>
      <div className="text-center">
        <p>{name}</p>
        <button onClick={handleChange}>Click Me</button>
      </div>
    </>
  );
}

export default App;
