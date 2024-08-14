import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axiosConfig";

const useCategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/auth/admin/v1/categories");
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return { data, loading, error };
};

export default useCategoryList;
