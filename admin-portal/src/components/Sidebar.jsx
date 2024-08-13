import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "./icons/DashboardIcon";
import UserManagementIcon from "./icons/UserManagementIcon";
import MenuManagementIcon from "./icons/MenuManagementIcon";
import NotificationIcon from "./icons/NotificationIcon";
import TableIcon from "./icons/TableIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SignUpIcon from "./icons/SignUpIcon";
import SidebarSection from "./Custom/Sidebar/SidebarSection";
import SidebarItem from "./Custom/Sidebar/SidebarItem";
import LogoIcon from "./icons/LogoIcon";
import MenuIcon from "./icons/MenuIcon";
import { CategoryManagementListPath } from "../path";

function Sidebar({ isOpen, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState("/dashboard");

  const handleClick = (path) => {
    setActiveItem(path);
  };

  return (
    <aside
      className={`bg-gradient-to-br from-gray-800 to-gray-900 fixed inset-y-0 z-40 my-4 ml-4 h-[calc(100vh-32px)] rounded-xl transition-transform duration-300 ${
        isOpen ? "w-72 translate-x-0" : "w-25 -translate-x-0"
      }`}
    >
      <div className="relative border-b border-white/20 flex justify-between items-center px-4 py-6">
        <Link to="#" className="flex items-center gap-4">
          <LogoIcon className={`h-6 w-auto ${isOpen ? "block" : "hidden"}`} /> 
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <MenuIcon />
        </button>
      </div>
      <div className="m-4">
        <SidebarSection title={"Dashboard"}>
          <SidebarItem
            to="/dashboard"
            icon={DashboardIcon}
            label="Dashboard"
            isOpen={isOpen}
            active={activeItem === "/dashboard"}
            onClick={() => handleClick("/dashboard")}
          />
          <SidebarItem
            to="/user-list"
            icon={UserManagementIcon}
            label="User Management"
            isOpen={isOpen}
            active={activeItem === "/user-list"}
            onClick={() => handleClick("/user-list")}
          />
          <SidebarItem
            to={CategoryManagementListPath}
            icon={MenuManagementIcon}
            label="Category Management"
            isOpen={isOpen}
            active={activeItem === CategoryManagementListPath}
            onClick={() => handleClick(CategoryManagementListPath)}
          />
          <SidebarItem
            to="/table"
            icon={TableIcon}
            label="Tables"
            isOpen={isOpen}
            active={activeItem === "/table"}
            onClick={() => handleClick("/table")}
          />
          <SidebarItem
            to="#"
            icon={NotificationIcon}
            label="Notifications"
            isOpen={isOpen}
            active={activeItem === "#"}
            onClick={() => handleClick("#")}
          />
        </SidebarSection>
        <SidebarSection title={"Auth"}>
          <SidebarItem
            to="#"
            icon={ProfileIcon}
            label="Sign In"
            isOpen={isOpen}
            active={activeItem === "#"}
            onClick={() => handleClick("#")}
          />
          <SidebarItem
            to="#"
            icon={SignUpIcon}
            label="Sign Up"
            isOpen={isOpen}
            active={activeItem === "#"}
            onClick={() => handleClick("#")}
          />
        </SidebarSection>
      </div>
    </aside>
  );
}

export default Sidebar;
