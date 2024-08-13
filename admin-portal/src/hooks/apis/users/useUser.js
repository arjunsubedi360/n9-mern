import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useUser = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/auth/admin/v1/users/${userId}`);
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Fetching user failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
};

export default useUser;
