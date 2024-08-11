import React from "react";
import { useParams } from "react-router-dom";
import useMenuItem from "../../../hooks/apis/menu/useMenuItem";
import Loader from "../../Custom/Loader";

const ViewMenuItem = () => {
  const { id: menuItemId } = useParams();
  const { data: menuItem, loading, error } = useMenuItem(menuItemId); // Fetch menu item data based on menuItemId

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-600 text-center">Error: {error}</div>;
  }

  if (!menuItem) {
    return <div className="text-gray-600 text-center">Menu item not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image and Name */}
        <div className="p-4 flex flex-col items-center">
          <img
            src={menuItem.image || "https://via.placeholder.com/300"}
            alt={menuItem.name}
            className="w-48 h-48 rounded-lg object-cover border-2 border-gray-300"
          />
          <h1 className="mt-4 text-2xl font-bold text-center">{menuItem.name}</h1>
        </div>
        {/* Go Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMenuItem;
