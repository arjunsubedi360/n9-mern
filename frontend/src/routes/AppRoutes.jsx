import React, { Suspense, lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Login from "../components/Login";
import LoadingBar from "../components/LoaderBar.jsx";
import Register from "../components/Register.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";

const About = lazy(() => import("../components/About.jsx"));
const Service = lazy(() => import("../components/Service.jsx"));

const AppRoutes = () => {
  const { authState } = useContext(AuthContext);
  const isAuth = authState?.isAuthenticated;
  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/services"
          element={
            <>
              <PrivateRoute isAuthenticated={isAuth}> 
                <Service/>
              </PrivateRoute>
            </>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
