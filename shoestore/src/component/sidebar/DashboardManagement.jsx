import React from "react";
import HomeIcon from "../../icons/HomeIcon";

function DashboardManagement() {
  return (
    <>
      <a aria-current="page" className="active" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <HomeIcon />
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            dashboard
          </p>
        </button>
      </a>
    </>
  );
}

export default DashboardManagement;
