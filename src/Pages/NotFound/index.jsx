// NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-700">Oops! Page not found.</p>
        <p className="mt-4 text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
