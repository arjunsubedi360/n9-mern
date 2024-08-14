import React, { useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import Toast from "./Custom/Toast";
import { registerValidation } from "../validations/registration.Validations";

export default function Register() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleFormSubmit = async (values, setSubmitting) => {
    try {
      const data = await register(values.email, values.password);
      if (data.success) {
        setSuccess(true);
        setShowToast(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setSubmitting(false);
    }
  };
  const handleClose = () => {
    setShowToast(false);
    setSuccess(false);
  };
  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {success && showToast && (
        <Toast
          message={"Registration successful! Please Check Your Email"}
          handleClose={handleClose}
        />
      )}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <img className="mx-auto w-48" src="logo.svg" alt="logo" />
        <h2 className="text-2xl font-bold text-center">
          Welcome to Shoe Store Nepal
        </h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registerValidation}
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
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && touched.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>
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
              {/* roles Select from two */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select your Role
                </label>
                <select
                  name="role"
                  id="role"
                  value={values.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.role && touched.role && (
                  <p className="text-sm text-red-600">{errors.role}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="text-sm text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login Here !!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
