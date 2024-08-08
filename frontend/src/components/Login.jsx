import { object, string } from "yup";
import React from "react";
import { Formik } from "formik";
import axios from "axios";

const Login = () => {
  const userSchema = object({
    email: string().email().required().label("Email"),
    password: string().required().label("Password"),
  });
  const handleSubmitForm = async (values) => {
    const result = await axios.post(
      "http://localhost:3001/auth/api/v1/users/login",
      {
        email: values.email,
        password: values.password,
      }
    );
    console.log(result.response.data);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={userSchema}
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
