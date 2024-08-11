import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useCreateMenu from "../../../hooks/apis/menus/useCreateMenu";
import Toast from "../../Custom/Toast";
import MenuForm from "./MenuForm";

const AddUserManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { createMenu, loading, error, success } = useCreateMenu();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createMenu(values);
      setSubmitting(false);
      if (success) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          navigate("/menus/list"); // Redirect to user list page
        }, 1000);
      }
    } catch (err) {
      setSubmitting(false);
      alert("Failed to add user.");
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {showToast && (
        <Toast
          message="Menu added successfully!"
          handleClose={handleCloseToast}
        />
      )}
      <MenuForm
        initialValues={{ name: "", image: "" }}
        onSubmit={handleSubmit}
        formTitle="Add Menu"
        submitButtonText="Add Menu"
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default AddUserManagement;
