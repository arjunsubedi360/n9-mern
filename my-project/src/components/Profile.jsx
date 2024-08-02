import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  const { user } = authState;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-indigo-600" 
          />
          <h2 className="text-2xl font-bold text-gray-800">Name: {user.name || "User"}</h2>
          <p className="text-gray-600">Email:{user.email}</p>
          <p className="text-gray-600">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
