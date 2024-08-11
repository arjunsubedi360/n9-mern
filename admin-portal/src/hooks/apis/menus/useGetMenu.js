import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useGetMenu = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/auth/admin/v1/menus/${id}`);
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Fetching menu failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useGetMenu;
