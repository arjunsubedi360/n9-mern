import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../../hooks/apis/users/useUser";
import Loader from "../../Custom/Loader";

const ViewUserManagement = () => {
  const { id: userId } = useParams();
  const { data: user, loading, error } = useUser(userId); // Fetch user data based on userId

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-600 text-center">Error: {error}</div>;
  }

  if (!user) {
    return <div className="text-gray-600 text-center">User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with Profile Image */}
        <div className="bg-indigo-600 p-4 flex items-center justify-center">
          <div className="relative">
            <img
              src={user.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">User Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <p className="mt-1 text-gray-900 text-lg font-semibold">{user.name}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900 text-lg font-semibold">{user.email}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="mt-1 text-gray-900 text-lg font-semibold">{user.role}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <p className="mt-1 text-gray-900 text-lg font-semibold">{user.status}</p>
            </div>
          </div>
          {/* Go Back Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserManagement;
