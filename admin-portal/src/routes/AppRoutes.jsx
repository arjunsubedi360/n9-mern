import { Suspense, lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";
import Layout from "../layouts/Layout";
import { UserManagementAddPath } from "../path";
import { AuthContext } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
// import Profile from "../components/Profile";

const Register = lazy(() => import("../components/Register"));
const Login = lazy(() => import("../components/Login"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const UserManagement = lazy(() => import("../components/UserManagement"));
const AddUserManagement = lazy(() =>
  import("../components/UserManagement/form/AddUser")
);
const EditUserManagement = lazy(() =>
  import("../components/UserManagement/form/EditUser")
);
const ViewUserManagement = lazy(() =>
  import("../components/UserManagement/view")
);

//Menus
const MenuManagementList = lazy(() => import("../components/MenuManagement"));
const AddMenuManagement = lazy(() =>
  import("../components/MenuManagement/form/AddMenu")
);
const EditMenuManagement = lazy(() =>
  import("../components/MenuManagement/form/EditMenu")
);
const ViewMenuManagement = lazy(() =>
  import("../components/MenuManagement/view")
);

const Table = lazy(() => import("../components/ProjectsTable"));

const AppRoutes = () => {
  const { authState } = useContext(AuthContext);
  const isAuth = authState?.isAuthenticated;
  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/user-list"
            element={
              <PrivateRoute isAuthenticated={isAuth}>
                <UserManagement />
              </PrivateRoute>
            }
          />
          <Route path={UserManagementAddPath} element={<AddUserManagement />} />
          <Route path="/users/edit/:id" element={<EditUserManagement />} />
          <Route path="/users/:id" element={<ViewUserManagement />} />

          {/* Menus path */}
          <Route path="/menus/list" element={<MenuManagementList />} />
          <Route path={"/menus/add"} element={<AddMenuManagement />} />
          <Route
            path={"/menus/edit/:id"}
            element={
              <PrivateRoute isAuthenticated={isAuth}>
                <EditMenuManagement />
              </PrivateRoute>
            }
          />
          <Route path={"/menus/view/:id"} element={<ViewMenuManagement />} />

          <Route path="/table" element={<Table />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
