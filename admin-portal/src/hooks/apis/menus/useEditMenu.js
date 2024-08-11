import { useState, useCallback } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useUpdateMenuItem = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateMenuItem = useCallback(async (id, payload) => {
    if (!id) {
      setError("No ID provided");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.put(`/auth/admin/v1/menus/${id}`, payload);
      setData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Updating menu failed");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, updateMenuItem };
};

export default useUpdateMenuItem;
