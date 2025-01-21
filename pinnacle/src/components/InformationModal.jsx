import React from 'react';

const InformationModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">Modal Title</h3>
        <p>This is a modal with more information.</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationModal;
