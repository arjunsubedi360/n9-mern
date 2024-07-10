// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./layouts/Navbar";
// import AppRoutes from "./routes/AppRoutes";
// import './styles.css';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import ContactForm from "./Form";
import './styles.css'
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Logo
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>

      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />

      </Routes> */}
      <AppRoutes/>
    </BrowserRouter>
  );
}
