import React  from "react";

function ChildComponent({ handleData }) {
 
  return (
    <div>
      <button onClick={() => handleData("I am changed")}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
