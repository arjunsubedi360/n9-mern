import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useDeleteCategory = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const deleteCategory = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.delete(
        `/auth/admin/v1/categories/${id}`
      );
      setSuccess(response.data.message || "Category created successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading, error };
};

export default useDeleteCategory;
