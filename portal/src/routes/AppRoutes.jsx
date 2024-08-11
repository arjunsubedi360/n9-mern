import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../layout/Home";
import LoadingBar from "../component/LoadingBar";

const SignIn = lazy(()=> import("../component/SignIn"))

const AppRoutes = () => {
  return (
    <Suspense fallback= {<LoadingBar/>} >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sigin" element={<SignIn/>} />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
