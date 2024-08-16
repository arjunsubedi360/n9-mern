import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "../Custom/Table/Headers";
import { headers } from "./constants/variables";
import Search from "../Search";

//hooks
import useCategoryList from "../../hooks/apis/category/useCategoryList";
import useDeleteCategory from "../../hooks/apis/category/useDeleteCategory";

import ViewIcon from "../Custom/ViewIcon";
import EditIcon from "../Custom/EditIcon";
import DeleteIcon from "../Custom/DeleteIcon";
import Loader from "../Custom/Loader";
import ModalOverlay from "../Custom/ModalOverlay";
import ConfirmDeleteModal from "../Custom/ConfirmDeleteModal";
import { CategoryManagementAddPath } from "../../path";

const CategoryManagementList = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useCategoryList();

  const {
    deleteCategory,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteCategory();

  const [showLoader, setShowLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedId) {
      await deleteCategory(selectedId);
      if (!deleteError) {
        setIsModalOpen(false);
        window.location.reload(); // Refresh to get the updated list
      }
    }
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  //pagination
  const handlePageChange = (page) => {
    setPageMeta((prev) => ({ ...prev, page }));
  };

  //pagination
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
        <h1 className="text-3xl font-bold text-gray-900">
          Category Management
        </h1>
        <div className="flex items-center">
          <Search className="mr-4" />
          <button
            onClick={() => navigate(CategoryManagementAddPath)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 bg-white">
          <TableHeader headers={headers} />
          <tbody>
            {data.map((category, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{category?.name || "N/A"}</td>
                <td className="px-6 py-4">{category?.slug || "N/A"}</td>
                <td className="px-6 py-4">{category?.createdAt || "N/A"}</td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <ViewIcon to={`/categories/${category._id}`} />
                  <EditIcon to={`/categories/edit/${category._id}`} />
                  <DeleteIcon onClick={() => handleDeleteClick(category._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalOverlay isOpen={isModalOpen} onRequestClose={handleDeleteCancel}>
        <ConfirmDeleteModal
          onClose={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
          title="category"
        />
      </ModalOverlay>
    </div>
  );
};

export default CategoryManagementList;
