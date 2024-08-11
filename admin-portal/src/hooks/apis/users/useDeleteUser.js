import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const deleteUser = async (userId) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.delete(`/auth/admin/v1/users/${userId}`);
      setSuccess(response.data.message || "User deleted successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Deletion failed");
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading, error, success };
};

export default useDeleteUser;
