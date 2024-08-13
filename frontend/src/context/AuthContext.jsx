import React, { createContext, useState, useEffect } from 'react';
// import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // const token = localStorage?.getItem('token');
    if (true) {
    //   const decodedToken = jwtDecode(token);
      setAuthState({ token: null, user: null, isAuthenticated: true });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};