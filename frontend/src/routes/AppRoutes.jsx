import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
// import Profile from "../components/Profile";

const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Service = lazy(() => import("../components/Service"));
const Register = lazy(() => import("../components/Register"));



const AppRoutes = () => {
 
  return (
    <Suspense fallback={<LoadingBar/>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/profile" element={<Profile />} /> */}

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
