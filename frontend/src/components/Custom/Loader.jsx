import React from "react";
import LoaderIcon from "../icons/LoaderIcon";

function Loader() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      role="status"
    >
      <LoaderIcon />
    </div>
  );
}

export default Loader;
