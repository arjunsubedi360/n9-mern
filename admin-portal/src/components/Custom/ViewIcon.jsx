import React from "react";
import { EyeIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const ViewIcon = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="text-gray-600 hover:text-gray-900"
      title="View"
    >
      <EyeIcon className="w-5 h-5" />
    </button>
  );
};

export default ViewIcon;
