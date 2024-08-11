import React from "react";
import { PencilIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const EditIcon = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="text-blue-600 hover:text-blue-800"
      title="Edit"
    >
      <PencilIcon className="w-5 h-5" />
    </button>
  );
};

export default EditIcon;
