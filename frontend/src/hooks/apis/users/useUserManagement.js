import { useState, useEffect } from 'react';
import axiosInstance from '../../../api/axiosConfig';

const useUserManagement = (pageMeta) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const params = {
          ...pageMeta,
          limit: Number(pageMeta.limit), // Convert limit to a number
        };
        const response = await axiosInstance.get('/auth/admin/v1/users', { params });
        
        setData(response.data.data);
        
        setPagination({
          ...response.data.pagination,
          limit: Number(response.data.pagination.limit), // Convert limit to a number
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [pageMeta]);

  return { data, loading, error, pagination };
};

export default useUserManagement;
