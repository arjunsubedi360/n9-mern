import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../context/AuthContext";

// Lazy load components
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Service = lazy(() => import("../components/Service"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const Profile = lazy(() => import("../components/Profile"));

const AppRoutes = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />

        {/* Private routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={authState?.isAuthenticated}>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
