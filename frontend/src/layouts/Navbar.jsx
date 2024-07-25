import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-700 p-2.5">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <ul className="flex list-none">
          <li className="ml-5">
            <Link to="/" className="custom-nav-link">
              Home
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/about" className="custom-nav-link">
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/services" className="custom-nav-link">
              Services
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/contact" className="custom-nav-link">
              Contact
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/register" className="custom-nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
