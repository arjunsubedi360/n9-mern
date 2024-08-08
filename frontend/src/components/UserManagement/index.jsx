import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "../Custom/Table/Headers";
import { headers } from "./constants/variables";
import Search from "../Search";
import useUserManagement from "../../hooks/apis/users/useUserManagement";
import useDeleteUser from "../../hooks/apis/users/useDeleteUser"; // Import the delete hook
import ViewIcon from "../Custom/ViewIcon";
import EditIcon from "../Custom/EditIcon";
import DeleteIcon from "../Custom/DeleteIcon";
import Loader from "../Custom/Loader";
import ModalOverlay from "../Custom/ModalOverlay";
import ConfirmDeleteModal from "../Custom/ConfirmDeleteModal";
import Pagination from "../Custom/Pagination"; // Import Pagination component

const UserManagementList = () => {
  const navigate = useNavigate();
  const [pageMeta, setPageMeta] = useState({ limit: 10, page: 1, sort: {} });
  const { data, loading, error, pagination } = useUserManagement(pageMeta);
  const { deleteUser, loading: deleteLoading, error: deleteError } = useDeleteUser();
  const [showLoader, setShowLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    let timer;
    if (loading || deleteLoading) {
      setShowLoader(true);
      timer = setTimeout(() => setShowLoader(false), 500);
    } else {
      timer = setTimeout(() => setShowLoader(false), 500);
    }

    return () => clearTimeout(timer);
  }, [loading, deleteLoading]);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedUserId) {
      await deleteUser(selectedUserId);
      if (!deleteError) {
        setIsModalOpen(false);
        window.location.reload(); // Refresh to get the updated list
      }
    }
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  const handlePageChange = (page) => {
    setPageMeta((prev) => ({ ...prev, page }));
  };

  const handleRowsPerPageChange = (limit) => {
    setPageMeta((prev) => ({ ...prev, limit, page: 1 }));
  };

  if (showLoader) {
    return <Loader />;
  }

  if (error || deleteError) {
    return <div>Error: {error || deleteError}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <div className="flex items-center">
          <Search className="mr-4" />
          <button
            onClick={() => navigate("/users/add")}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 bg-white">
          <TableHeader headers={headers} />
          <tbody>
            {data.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{user?.name}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">{user?.phoneNumber || "N/A"}</td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <ViewIcon to={`/users/${user._id}`} />
                  <EditIcon to={`/users/edit/${user._id}`} />
                  <DeleteIcon onClick={() => handleDeleteClick(user._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Pagination */}
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      <ModalOverlay isOpen={isModalOpen} onRequestClose={handleDeleteCancel}>
        <ConfirmDeleteModal onClose={handleDeleteCancel} onConfirm={handleDeleteConfirm} />
      </ModalOverlay>
    </div>
  );
};

export default UserManagementList;
