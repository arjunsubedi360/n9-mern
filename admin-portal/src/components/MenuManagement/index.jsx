import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "../Custom/Table/Headers";
import { headers } from "./constants/variables";
import Search from "../Search";
import useMenuList from "../../hooks/apis/menus/useMenuList";
import useDeleteMenu from "../../hooks/apis/menus/useDeleteMenu"; // Import the delete hook
import Loader from "../Custom/Loader";
import ModalOverlay from "../Custom/ModalOverlay";
import ConfirmDeleteModal from "../Custom/ConfirmDeleteModal";
import ViewIcon from "../icons/ViewIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { path } from "../../path";

const MenuManagementList = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useMenuList();

  const {
    deleteItem,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteMenu();
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
      await deleteItem(selectedId);
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

  if (showLoader) {
    return <Loader />;
  }

  if (error || deleteError) {
    return <div>Error: {error || deleteError}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
        <div className="flex items-center">
          <Search className="mr-4" />
          <button
            onClick={() => navigate(path.ADD("menus"))}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Menu
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 bg-white">
          <TableHeader headers={headers} />
          <tbody>
            {data?.map((menu, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{menu?.name || "N/A"}</td>
                <td className="px-6 py-4">
                  {" "}
                  <img
                    className="w-10 h-10 rounded-full"
                    src={menu.image}
                    alt="Jese image"
                  />
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <ViewIcon to={path.VIEW("menus", menu._id)} />
                  <EditIcon to={`/menus/edit/${menu._id}`} />
                  <DeleteIcon onClick={() => handleDeleteClick(menu._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalOverlay isOpen={isModalOpen} onRequestClose={handleDeleteCancel}>
        <ConfirmDeleteModal
          title={"menu"}
          onClose={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      </ModalOverlay>
    </div>
  );
};

export default MenuManagementList;
