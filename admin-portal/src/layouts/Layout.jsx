import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : "ml-48" 
        }`}
      >
        <Navbar />
        <main className="flex-1 mt-16 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
