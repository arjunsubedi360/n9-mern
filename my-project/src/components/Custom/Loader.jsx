import React from "react";
import LoaderIcon from "../icons/LoaderIcon";

function Loader() {
  return (
    <div role="status">
        <LoaderIcon/>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
