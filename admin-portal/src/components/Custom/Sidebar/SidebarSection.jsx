import React from "react";

const SidebarSection = ({ title, children }) => {
  return (
    <ul className="mb-4 flex flex-col gap-1">
      {title && (
        <li className="mx-3.5 mt-4 mb-2">
          <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
            {title}
          </p>
        </li>
      )}
      {children}
    </ul>
  );
};

export default SidebarSection;
