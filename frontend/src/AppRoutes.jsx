import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ContactForm from "./Form";

// const Home = React.lazy(() => import("./Home"));


const AppRoutes = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    // </Suspense>
  );
};

export default AppRoutes;
