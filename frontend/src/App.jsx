import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './layouts/Navbar';

export default function App() {
  return (
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
  );
}
