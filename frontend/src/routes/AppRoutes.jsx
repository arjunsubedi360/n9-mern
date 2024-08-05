import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
// import Profile from "../components/Profile";

const Register = lazy(() => import("../components/Register"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const UserManagement = lazy(() => import("../components/UserMangement"));
const Table = lazy(() => import("../components/ProjectsTable"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserManagement />} />
        <Route path="/table" element={<Table />} />

        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
