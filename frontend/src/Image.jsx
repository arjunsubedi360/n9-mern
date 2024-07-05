import React from "react";

function Child({ setItems }) {
  return (
    <div>
      <button onClick={() => setItems([{ id: 4, name: "Item 4" }])}>Add</button>
    </div>
  );
}

export default Child;
