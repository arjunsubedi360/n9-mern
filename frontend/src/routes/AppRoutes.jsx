import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Loading from "../components/Loading";

const About = lazy(() => import("../components/About.jsx"));
const Service = lazy(() => import("../components/Service.jsx"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
