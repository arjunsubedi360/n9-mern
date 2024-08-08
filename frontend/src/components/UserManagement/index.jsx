import React, { useEffect, useState } from "react";
import TableHeader from "../Custom/Table/Headers";
import { headers } from "./constants/variables";
import Search from "../Search";
import useUserManagement from "../../hooks/apis/useUserManagement";

const UserManagementList = () => {
  const { data, loading, error } = useUserManagement();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data.length > 0) setUsers(data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="p-4">
      {/* Flex container for title and search input */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <Search />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add User
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 bg-white">
          <TableHeader headers={headers} />
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{user?.name}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">{user?.phoneNumber || 'N/A'}</td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline ml-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementList;
