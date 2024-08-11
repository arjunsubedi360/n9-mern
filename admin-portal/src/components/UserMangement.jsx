import React, { useContext } from "react";
const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {true ? (
          <>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Mingtindu Sherpa</h2>
            <p className="text-gray-600 mb-4">Mingmartu@gmail.com</p>
            <button
            //   onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">
              You are not logged in
            </h2>
            <button
              onClick={() =>
                login({
                  name: "John Doe",
                  email: "john@example.com",
                  profilePicture: "https://via.placeholder.com/150",
                })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
