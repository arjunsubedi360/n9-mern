import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useCreateCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createCategory = async (payload) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.post("/auth/admin/v1/categories", payload);
      setSuccess(response.data.message || "Category created successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  return { createCategory, loading, error, success };
};

export default useCreateCategory;
