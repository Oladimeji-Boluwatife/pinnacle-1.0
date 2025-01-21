import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#ffff' }} className="text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">   Pinnacle’s <span className="font-light">Rental</span></h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/properties" className="hover:underline">Properties</Link>
          <Link to="/career" className="hover:underline">Career</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              src="/profile-icon.png" // Use an actual profile icon image here
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded hidden group-hover:block">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
