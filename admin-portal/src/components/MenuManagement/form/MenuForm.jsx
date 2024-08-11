import React from "react";
import { Formik } from "formik";
import ErrorMessage from "../../Custom/ErrorMessage";
import { createMenu } from "../../../validations/menuManagement.validation";

const MenuForm = ({ initialValues, onSubmit, formTitle, submitButtonText, loading, error }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
      <div className="w-full max-w-8xl p-12 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">{formTitle}</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
            {error}
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={createMenu}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-3 py-3 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage error={errors.name} touched={touched.name} />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    value={values.image}
                    onChange={handleChange}
                    className="w-full px-3 py-3 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage error={errors.image} touched={touched.image} />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? "Submitting..." : submitButtonText}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MenuForm;
