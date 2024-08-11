import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useMenuManagement = (pageMeta) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/auth/admin/v1/menus");
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, [pageMeta]);

  return { data, loading, error };
};

export default useMenuManagement;
