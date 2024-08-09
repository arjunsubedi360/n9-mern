import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { authState, setAuthState } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = (e) => {
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <li className="ml-5 relative">
            {authState.isAuthenticated ? (
              <div ref={profileRef} className="relative">
                <button onClick={toggleProfile} className="custom-nav-link">
                  Profile
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem('token');
                          setAuthState({ token: null, user: null, isAuthenticated: false });
                          setIsProfileOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="custom-nav-link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
