import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white rounded-xl shadow-sm mx-16 mt-8 px-8 py-5">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left side links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-black text-lg hover:text-gray-600 font-medium">Home</Link>
          <Link to="/about" className="text-black text-lg hover:text-gray-600 font-medium">About</Link>
          <Link to="/shop" className="text-black text-lg hover:text-gray-600 font-medium">Shop</Link>
          <Link to="/stores" className="text-black text-lg hover:text-gray-600 font-medium">Stores</Link>
        </div>
        
        {/* Logo in the middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src="/assets/logo.png" alt="Logo" className="h-14" />
          </Link>
        </div>
        
        {/* Right side links and icons */}
        <div className="flex items-center space-x-6">
          <Link to="/bites" className="text-black text-lg hover:text-gray-600 font-medium">Bites</Link>
          <Link to="/merch" className="text-black text-lg hover:text-gray-600 font-medium">Merch</Link>
          <Link to="/contact" className="text-black text-lg hover:text-gray-600 font-medium">Contact Us</Link>
          <FaSearch className="text-black text-lg hover:text-gray-600 cursor-pointer" />
          <FaShoppingCart className="text-black hover:text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo in mobile view */}
        <Link to="/" className="mx-auto">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Cart icon in mobile view */}
        <div className="flex space-x-4">
          <FaShoppingCart className="text-black hover:text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/shop" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/stores" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Stores</Link>
            <Link to="/bites" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Bites</Link>
            <Link to="/merch" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Merch</Link>
            <Link to="/contact" className="text-black hover:text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
          <div className="flex space-x-4 pt-2">
            <FaSearch className="text-black hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;