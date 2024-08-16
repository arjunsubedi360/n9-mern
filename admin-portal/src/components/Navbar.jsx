import React, { useContext, useRef, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
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

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 flex justify-end items-center p-4">
      <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center focus:outline-none"
        >
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
        </button>
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
              <Link to="/admin/login" className="custom-nav-link">
                Login
              </Link>
            )}
      </div>
    </div>
  );
};

export default Navbar;
