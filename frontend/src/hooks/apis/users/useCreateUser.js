import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createUser = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.post("/auth/admin/v1/users", userData);
      setSuccess(response.data.message || "User created successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, success };
};

export default useCreateUser;
