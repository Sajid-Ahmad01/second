import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("LoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-50 text-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-600"
        >
          My Doctor Time
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/entry"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            Entry
          </Link>
          <button
            className="text-gray-800 hover:text-red-500 transition-colors duration-300"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none">
          {/* Add an icon for the menu here if needed */}☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
