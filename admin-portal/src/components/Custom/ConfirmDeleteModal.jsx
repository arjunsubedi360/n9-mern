import React from 'react';

const ConfirmDeleteModal = ({ onClose, onConfirm, title }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full z-50">
      <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
      <p className="mb-4">Are you sure you want to delete this {title}?</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
