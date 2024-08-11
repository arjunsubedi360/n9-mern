import React from "react";
import { useParams } from "react-router-dom";
import useMenuItem from "../../../hooks/apis/menus/useGetMenu";
import Loader from "../../Custom/Loader";

const ViewMenuItem = () => {
  const { id: menuItemId } = useParams();
  const { data: menuItem, loading, error } = useMenuItem(menuItemId);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden mb-10 transform transition-transform hover:scale-105">
        {/* Header */}
        <div className="bg-indigo-700 p-4 text-center">
          <h1 className="text-3xl font-extrabold text-white">{menuItem.name}</h1>
        </div>
        {/* Image and Name */}
        <div className="p-8 flex flex-col items-center">
          <img
            src={menuItem.image || "https://via.placeholder.com/300"}
            alt={menuItem.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-700 shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">{menuItem.name}</h2>
        </div>
        {/* Go Back Button */}
        <div className="mt-8 text-center mb-4">
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMenuItem;
