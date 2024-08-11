import React, { useContext } from "react";
import { UserContext } from ".";

function Component3() {
  const { user } = useContext(UserContext);
  return <div>{`I am ${user}`}</div>;
}

export default Component3;
