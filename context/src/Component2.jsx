import React, { useContext } from "react";
import { UserContext } from ".";

function Component2({value, children}) {
  console.log("children", children);
  const { setUser } = useContext(UserContext);

  return (children)
}

export default Component2;
