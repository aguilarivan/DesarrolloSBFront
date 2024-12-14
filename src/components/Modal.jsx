import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 -top-6 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="relative w-full h-auto max-w-4xl max-h-[80vh] bg-red-300 rounded-lg shadow-lg overflow-hidden content-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;

