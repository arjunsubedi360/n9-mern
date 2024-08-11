import { useState } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useCreateMenu = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createMenu = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.post("/auth/admin/v1/menus", data);
      setSuccess(response?.data?.message || "User created successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  return { createMenu, loading, error, success };
};

export default useCreateMenu;
