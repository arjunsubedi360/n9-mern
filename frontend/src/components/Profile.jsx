// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const Profile = () => {
//   const { user } = useContext(AuthContext);

//   if(!user) {
//     return (
//       <Link to="/login">Login</Link>
//     )
//   }
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//         {user ? (
//           <>
//             <img
//               src={user?.profilePicture}
//               alt="Profile"
//               className="w-24 h-24 rounded-full mx-auto mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
//             <p className="text-gray-600 mb-4">{user?.email}</p>
//             <button
//               onClick={logout}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-xl font-semibold mb-4">You are not logged in</h2>
//             <button
//               onClick={() => login({ name: 'John Doe', email: 'john@example.com', profilePicture: 'https://via.placeholder.com/150' })}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
