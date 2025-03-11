import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-black text-white pt-4 font-oswald">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Left Section: Logo */}
        <Link to="/">
          <img src={logo} alt="FreedSpirit Logo" className="h-10" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Right Section: Search, Cart, Account (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 bg-gray-800 text-white rounded-full w-64 focus:outline-none"
            />
            <button className="absolute right-3 top-2 text-red-500">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center space-x-2 text-sm">
            <FiShoppingCart size={24} />
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Shopping Cart</span>
              <span className="text-sm">Rs 0.00</span>
            </div>
          </div>

          {/* Account Section */}
          <div className="text-sm pr-4">
            <p className="text-gray-400">Login here</p>
            <Link to="/account" className="font-bold hover:text-red-500">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-slate-800 p-2 mt-4 md:flex md:justify-start">
      <ul
        className={`flex flex-col md:flex-row md:space-x-10 text-lg font-medium ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Luggage", path: "/luggage" },
          { name: "Hard Parts", path: "/hard-parts" },
          { name: "Custom Built", path: "/custom-built" },
        ].map((item) => (
          <li key={item.path} className="relative">
            <Link
              to={item.path}
              className={`hover:text-red-500 block py-2 md:py-0 ${
                location.pathname === item.path ? "text-red-500" : ""
              }`}
            >
              {item.name}
            </Link>
            {location.pathname === item.path && (
              <div className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-red-500"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
