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
        const response = await axiosInstance.get('/auth/admin/v1/users', { params: pageMeta });
        setData(response.data.data);
        setPagination(response.data.pagination);
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
