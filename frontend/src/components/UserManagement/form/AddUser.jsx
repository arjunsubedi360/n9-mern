import React from "react";
import UserForm from "./UserForm";

const AddUserManagement = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Adding user:", values);
    setTimeout(() => {
      alert("User added successfully!");
      setSubmitting(false);
    }, 400);
  };

  return (
    <UserForm
      initialValues={{ name: "", email: "", role: "", status: "" }}
      onSubmit={handleSubmit}
      formTitle="Add User"
      submitButtonText="Add User"
    />
  );
};

export default AddUserManagement;
