import React from "react";
import TableHeader from "../Custom/Table/Headers";
import { headers } from "./constants/variables";
import { users as data } from "../../dummyData/users";
import Search from "../Search";

const UserManagementList = () => {
  return (
    <div className="p-4">
      {/* Flex container for title and search input */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <Search />
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
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">{user.phoneNumber}</td>
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
