<<<<<<< HEAD
import React from 'react';
import { Router } from 'react-router-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './layouts/Navbar';
=======
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";
import { AuthProvider } from "./context/AuthContext";
>>>>>>> 56b62dbd57aeaaaf6a635625a61475bcccbd31f2

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
