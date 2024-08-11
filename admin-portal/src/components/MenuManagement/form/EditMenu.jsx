import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetMenu from "../../../hooks/apis/menus/useGetMenu";
import MenuForm from "./MenuForm";

const EditMenuManagement = () => {
  const { id: menuId } = useParams();
  console.log("menuId", menuId);
  const { data: menu, loading, error } = useGetMenu(menuId);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    if (menu) {
      setInitialValues({
        name: menu.name,
        image: menu.image,
      });
    }
  }, [menu]);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Updating menu:", values);
    setTimeout(() => {
      alert("User updated successfully!");
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
    <MenuForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      formTitle="Edit Menu"
      submitButtonText="Update Menu"
    />
  ) : (
    <div>Menu not found</div>
  );
};

export default EditMenuManagement;
