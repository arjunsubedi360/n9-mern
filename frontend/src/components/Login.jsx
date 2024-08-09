import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Formik } from "formik";

import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/apis/useAuth";
import Loader from "./Custom/Loader";
import Toast from "./Custom/Toast";
import { loginValidation } from "../validations/login.validations";

const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { setAuthState } = useContext(AuthContext);
  const { login, loading, error } = useAuth();

  const handleFormSubmit = async (values, setSubmitting) => {
    try {
      const data = await login(values.email, values.password);
      if (data.success) {
        const token = data.data.token;
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        setAuthState({
          token,
          user: decodedToken,
          isAuthenticated: true,
        });
        setSuccess(true);
        setShowToast(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowToast(false);
    setSuccess(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {success && showToast && (
        <Toast message={"Login successful"} handleClose={handleClose} />
      )}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidation}
          onSubmit={(values, { setSubmitting }) => {
            handleFormSubmit(values, setSubmitting);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && touched.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password && touched.password && (
                  <p className="text-sm text-red-600">{errors.password}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="text-sm text-center">
          <p>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
