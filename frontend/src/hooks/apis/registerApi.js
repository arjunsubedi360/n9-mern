import { useState } from "react";
import axiosInstance from "../../api/axiosConfig";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (name, email, password, role) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("auth/api/v1/users", {name, email, password, role});
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
      throw err;
    }
  };
  return { login, loading, error };
};

export default useAuth;
