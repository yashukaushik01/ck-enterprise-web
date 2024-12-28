import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);  // Track if the dialog is open

  const downloadCatalog = () => {
    const pdfUrl = "../../catalogue.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);  // Toggle dialog (dropdown) visibility
  }

  return (
    <nav className="bg-gray-800 p-4 w-full z-10 fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link className="text-white text-lg font-bold" to="/">CK Enterprises</Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleDialog} className="text-white">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 font-bold">
          <Link className="text-gray-300 hover:text-white p-2" to="/">Home</Link>
          <Link className="text-gray-300 hover:text-white p-2" to="/products">Our Products</Link>
          <Link onClick={downloadCatalog} className="text-gray-300 hover:text-white p-2">Catalog</Link>
          <Link className="text-gray-300 hover:text-white p-2" to="/about">About Us</Link>
          <Link className="text-gray-300 hover:text-white p-2" to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Dialog (Dropdown) */}
      {isDialogOpen && (
        <div 
          className={`fixed inset-x-0 top-16 bg-gray-800 bg-opacity-90 z-20 
            transition-opacity duration-300 ease-in-out 
            ${isDialogOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDialog} className="text-white text-2xl">X</button>
          </div>
          <div className="flex flex-col space-y-6 p-8">
            {/* Mobile Menu Links */}
            <Link className="text-white hover:text-blue-500 text-xl" to="/" onClick={toggleDialog}>Home</Link>
            <Link className="text-white hover:text-blue-500 text-xl" to="/products" onClick={toggleDialog}>Our Products</Link>
            <Link onClick={() => { downloadCatalog(); toggleDialog() }} className="text-white hover:text-blue-500 text-xl">Catalog</Link>
            <Link className="text-white hover:text-blue-500 text-xl" to="/about" onClick={toggleDialog}>About Us</Link>
            <Link className="text-white hover:text-blue-500 text-xl" to="/contact" onClick={toggleDialog}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
