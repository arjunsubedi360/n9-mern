import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
import Layout from "../layouts/Layout";
// import Profile from "../components/Profile";


const Register = lazy(() => import("../components/Register"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const UserManagement = lazy(() => import("../components/UserManagement"));
const AddUserManagement = lazy(() => import("../components/UserManagement/form/AddUser"));
const EditUserManagement = lazy(() => import("../components/UserManagement/form/EditUser"));
const ViewUserManagement = lazy(() => import("../components/UserManagement/view"));

//Menus
const MenuManagementList = lazy(() => import("../components/MenuManagement"));


//CRUDL
const Table = lazy(() => import("../components/ProjectsTable"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserManagement />} />
        <Route path="/users/add" element={<AddUserManagement />} />
        <Route path="/users/edit/:id" element={<EditUserManagement />} />
        <Route path="/users/:id" element={<ViewUserManagement />} />

        {/* Menus path */}
        <Route path="/menus" element={<MenuManagementList />} />
        <Route path="/table" element={<Table />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
