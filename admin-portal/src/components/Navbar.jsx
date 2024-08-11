import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 flex justify-end items-center p-4">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <a
              href="#profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile Settings
            </a>
            <a
              href="#logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
