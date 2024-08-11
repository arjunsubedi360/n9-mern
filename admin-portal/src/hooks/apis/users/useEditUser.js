import { useState } from "react";
import axiosInstance from "../../api/axiosConfig";

const useEditUser = (userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const editUser = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.put(`/auth/admin/v1/users/${userId}`, userData);
      setSuccess(response.data.message || "User updated successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return { editUser, loading, error, success };
};

export default useEditUser;
