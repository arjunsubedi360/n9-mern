import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserForm from "./UserForm";
import useUser from "../../../hooks/apis/users/useUser";

const EditUserManagement = () => {
  const { id: userId } = useParams();
  const { data: user, loading, error } = useUser(userId);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    if (user) {
      setInitialValues({
        name: user.name,
      });
    }
  }, [user]);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Updating category:", values);
    setTimeout(() => {
      alert("Category updated successfully!");
      setSubmitting(false);
    }, 400);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return initialValues ? (
    <UserForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      formTitle="Edit User"
      submitButtonText="Update User"
    />
  ) : (
    <div>User not found</div>
  );
};

export default EditUserManagement;
