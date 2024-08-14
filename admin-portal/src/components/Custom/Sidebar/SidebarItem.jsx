import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ to, icon: Icon, label, isOpen, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-2 rounded-md transition-colors duration-300 ${
        active ? "bg-blue-600 text-white" : "text-gray-400"
      }`}
    >
      <Icon />
      <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
        {label}
      </span>
    </Link>
  );
}

export default SidebarItem;
