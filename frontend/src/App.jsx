import React, { useState, useEffect } from "react";
import ChildComponent from "./components/ChildComponent";
import ContextComponent from "./components/ContextComponent";

function App() {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("Nirtesh");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("I am running ");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = (e) => {
    setCount(count + 1);
  };
  return (
    // <div className="text-center flex-col">
    //   <p>You clicked {count} times</p>
    //   <p>Your name {searchText}</p>

    //   <div>
    //     <button onClick={(e) => handleClick(e)}>Click me</button>
    //   </div>

    //   <div>
    //     <button onClick={() => setSearchText("Arjun")}>Change searchText</button>
    //   </div>
    //   <ChildComponent searchText={searchText} />
    // </div>
    <ContextComponent/>
  );
}

export default App;
