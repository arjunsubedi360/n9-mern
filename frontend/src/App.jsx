import React, { useState, useEffect } from "react";
import ChildComponent from "./components/ChildComponent";
import ContextComponent from "./components/ContextComponent";
import UseMeMoComponent from "./components/UseMemoComponent";
import MemoComponent from "./components/MemoComponent";

function App() {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("Nirtesh");

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  // const handleClick = (e) => {
  //   setCount(count + 1);
  // };
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
    // <ContextComponent/>
    // <UseMeMoComponent/>
    <MemoComponent/>
  );
}

export default App;
