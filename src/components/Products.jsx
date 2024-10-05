import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [productList, setProductList] = useState([]); // Use state to hold product list
    const [loading, setLoading] = useState(true); // Use state for loading status
    const [error, setError] = useState(null); // Use state for error handling

    useEffect(() => {
        fetch('https://yashukaushik01.github.io/ck-enterprise-web/product-details.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProductList(data); // Update state with fetched data
                setLoading(false); // Set loading to false
            })
            .catch(err => {
                setError(err.message); // Handle errors
                setLoading(false); // Set loading to false
            });
    }, []); // Empty dependency array to run once on mount

    if (loading) {
        return <div>Loading...</div>; // Display loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }

    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-4xl font-bold my-4 text-gray-800">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productList.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                                <img 
                                    src={product.titleImage} 
                                    className="w-full h-48 object-cover" 
                                    alt={product.name} 
                                />
                                <div className="p-4">
                                    <h5 className="font-bold text-lg text-gray-800">{product.name}</h5>
                                    {/* Uncomment to display price */}
                                    {/* <p className="text-gray-600">{`$${product.price.toFixed(2)}`}</p> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
