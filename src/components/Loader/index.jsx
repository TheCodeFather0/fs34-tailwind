// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <span className="text-lg text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
