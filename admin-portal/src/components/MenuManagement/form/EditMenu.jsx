import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetMenu from "../../../hooks/apis/menus/useGetMenu";
import useUpdateMenuItem from "../../../hooks/apis/menus/useEditMenu";
import MenuForm from "./MenuForm";
import Loader from "../../Custom/Loader";
import Toast from "../../Custom/Toast";

const EditMenuManagement = () => {
  const { id: menuId } = useParams();
  const navigate = useNavigate();
  const { data: menu, loading: fetching, error: fetchError } = useGetMenu(menuId);
  const { data: updatedMenu, loading: updating, error: updateError, updateMenuItem } = useUpdateMenuItem();

  const [initialValues, setInitialValues] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (menu) {
      setInitialValues({
        name: menu.name,
        image: menu.image,
      });
    }
  }, [menu]);

  useEffect(() => {
    if (updatedMenu) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/menus/list"); // Navigate to the list page after the toast message
      }, 2000); // Adjust time to match the duration of your toast message
    }
  }, [updatedMenu, navigate]);

  const handleSubmit = (values, { setSubmitting }) => {
    updateMenuItem(menuId, values);
    setSubmitting(false);
  };

  if (fetching || updating) {
    return <Loader />;
  }

  if (fetchError) {
    return <div className="text-red-600 text-center">Error: {fetchError}</div>;
  }

  if (updateError) {
    return <div className="text-red-600 text-center">Update Error: {updateError}</div>;
  }

  return (
    <div>
      {showToast && <Toast message={"Menu updated successfully."} />}
      {initialValues ? (
        <MenuForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          formTitle="Edit Menu"
          submitButtonText="Update Menu"
        />
      ) : (
        <div>Menu not found</div>
      )}
    </div>
  );
};

export default EditMenuManagement;
