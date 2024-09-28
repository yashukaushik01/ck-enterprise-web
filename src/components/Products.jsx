import React from 'react';
import imgUblChuck from '../assets/img-ubl_chuck.png';
import productJson from '../assets/product-details.json';
import { Routes, Route, Link } from 'react-router-dom';
// import boltImage from '../assets/bolt.jpg';

const Products = () => {
    const productList = productJson;

    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-center text-2xl font-bold my-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productList.map(product => (
                    <Link to={`${product.id}`}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden" key={product.id}>
                            <img src={product.image} className="w-full h-48 object-cover" alt={product.name} />
                            <div className="p-4">
                                <h5 className="font-bold">{product.name}</h5>
                                {/* <p>{product.price}</p> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;