import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

const DeleteIcon = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-red-600 hover:text-red-800"
    title="Delete"
  >
    <TrashIcon className="w-5 h-5" />
  </button>
);

export default DeleteIcon;