import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
