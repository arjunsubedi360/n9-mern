import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CategoryForm from "./CategoryForm";
import useCreateCategory from "../../../hooks/apis/category/useCreateCategory";
import Toast from "../../Custom/Toast";
import { CategoryManagementListPath } from "../../../path";

const AddCategoryManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { createCategory, loading, error, success } = useCreateCategory();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createCategory(values);
      setSubmitting(false);
      if (success) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          navigate(CategoryManagementListPath); // Redirect to user list page
        }, 1000);
      }
    } catch (err) {
      setSubmitting(false);
      alert("Failed to add category.");
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {showToast && (
        <Toast
          message="Category added successfully!"
          handleClose={handleCloseToast}
        />
      )}
      <CategoryForm
        initialValues={{ name: ""}}
        onSubmit={handleSubmit}
        formTitle="Add Category"
        submitButtonText="Add Category"
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default AddCategoryManagement;
