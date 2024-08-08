import React, { useContext } from "react";
import { Formik } from "formik";
import { loginValidation } from "../validations/login.validations";
import axiosInstance from "../api/axiosConofig";
import { AuthContext } from "../context/AuthContext";

//We want to user is authenticated or not

/* 
1. We need to store login token and validate user authentication
2. Then we need store token in local storage (If page is refresh still use will be loggedin)
*/
const Login = () => {
  const { setAuthState } = useContext(AuthContext);
  const handleSubmitForm = async (values) => {
    const result = await axiosInstance.post("/auth/api/v1/users/login", {
      email: values.email,
      password: values.password,
    });
    console.log(result.response.data);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidation}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitForm(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
