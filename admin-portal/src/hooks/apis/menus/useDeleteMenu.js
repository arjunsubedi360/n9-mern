import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const deleteItem = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.delete(`/auth/admin/v1/menus/${id}`);
      setSuccess(response.data.message || "Menu deleted successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Deletion failed");
    } finally {
      setLoading(false);
    }
  };

  return { deleteItem, loading, error, success };
};

export default useDelete;
