// src/pages/Signup.jsx
import React from "react";

const Signup = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-gold mb-6">Signup</h2>
      <form className="w-1/3 bg-gray-100 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" className="w-full px-4 py-2 border rounded" />
        </div>
        <button className="bg-gold text-white px-4 py-2 rounded w-full">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
