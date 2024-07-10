import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";

const Home = React.lazy(() => import("../components/Home"));
const About = React.lazy(() => import("../components/About"));
const Contact = React.lazy(() => import("../components/Contact"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingBar/>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
