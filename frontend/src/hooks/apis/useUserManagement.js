import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosConfig";

const useUserManagement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get("/auth/admin/v1/users");
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Fetching users failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useUserManagement;
