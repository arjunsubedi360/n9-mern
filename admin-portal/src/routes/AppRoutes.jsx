import { Suspense, lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
import Layout from "../layouts/Layout";
import { CategoryManagementAddPath, CategoryManagementListPath, CategoryManagementViewPath } from "../path";
import { AuthContext } from "../context/AuthContext";
// import Profile from "../components/Profile";


const Register = lazy(() => import("../components/Register"));
const Login = lazy(() => import("../components/Login"));
const Profile = lazy(() => import("../components/Profile"));

const Dashboard = lazy(() => import("../components/Dashboard"));
const UserManagement = lazy(() => import("../components/UserManagement"));
const AddUserManagement = lazy(() => import("../components/UserManagement/form/AddUser"));
const EditUserManagement = lazy(() => import("../components/UserManagement/form/EditUser"));
const ViewUserManagement = lazy(() => import("../components/UserManagement/view"));


//Category
const CategoryManagementList = lazy(() => import("../components/CategoryManagement"));
const AddCategoryManagement = lazy(() => import("../components/CategoryManagement/form/AddCategory"));
const ViewCategoryManagement = lazy(() => import("../components/CategoryManagement/view/index"));



//CRUDL
const Table = lazy(() => import("../components/ProjectsTable"));

const AppRoutes = () => {
  const {authState} = useContext(AuthContext);
  const isAuth = authState.isA
  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserManagement />} />
        <Route path="/users/add" element={<AddUserManagement />} />
        <Route path="/users/edit/:id" element={<EditUserManagement />} />
        <Route path="/users/:id" element={<ViewUserManagement />} />

        {/* Category path */}
        <Route path={CategoryManagementListPath} element={<CategoryManagementList />} />
        <Route path={CategoryManagementAddPath} element={<AddCategoryManagement />} />
        <Route path={CategoryManagementAddPath} element={<AddCategoryManagement />} />
        <Route path={CategoryManagementViewPath} element={<ViewCategoryManagement />} />


        <Route path="/table" element={<Table />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
