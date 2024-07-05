import React, { useEffect, useState } from "react";
import Child from "./Image";

function Product() {
  const products = [
    { id: 1, name: "Veg" },
    { id: 2, name: "Non Veg" },
    { id: 3, name: "Maha Veg" },
  ];
  const [items, setItems] = useState(products);

  //   useEffect(() => {
  //     console.log("I am running");
  //   }); //I will run on every mount or change in state (side effect)

  //   useEffect(() => {
  //     console.log("I am running now");
  //   }, []);

  useEffect(() => {
    console.log("I am running now", items);
  }, [items]); //depedency

  const addItems = (prev) => setItems([...prev, ...items]);
  return (
    <div>
      <Child setItems={addItems} />
    </div>
  );
}

export default Product;
