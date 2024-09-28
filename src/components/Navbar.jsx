import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 w-full z-10">
            <div className="container mx-auto flex justify-between">
                <Link className="text-white text-lg font-bold" to="/">CK Enterprises</Link>
                <div className="space-x-4 font-bold">
                    <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
                    <Link className="text-gray-300 hover:text-white" to="/products">Our Products</Link>
                    <Link className="text-gray-300 hover:text-white" to="/about">Catalog</Link>
                    <Link className="text-gray-300 hover:text-white" to="/about">About Us</Link>
                    <Link className="text-gray-300 hover:text-white" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;