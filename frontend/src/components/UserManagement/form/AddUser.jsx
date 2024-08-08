import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import UserForm from "./UserForm";
import useCreateUser from "../../../hooks/apis/users/useCreateUser";
import Toast from "../../Custom/Toast";

const AddUserManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { createUser, loading, error, success } = useCreateUser();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createUser(values);
      setSubmitting(false);
      if (success) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          navigate("/user-list"); // Redirect to user list page
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
          message="User added successfully!"
          handleClose={handleCloseToast}
        />
      )}
      <UserForm
        initialValues={{ name: "", email: "", role: "", status: "" }}
        onSubmit={handleSubmit}
        formTitle="Add User"
        submitButtonText="Add User"
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default AddUserManagement;
