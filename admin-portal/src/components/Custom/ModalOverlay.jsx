import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility

const ModalOverlay = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
    >
      {children}
    </Modal>
  );
};

export default ModalOverlay;
