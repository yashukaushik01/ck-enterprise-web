import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null); // State to hold the product
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        fetch('https://yashukaushik01.github.io/ck-enterprise-web/product-details.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const foundProduct = data.find(x => x.id === productId);
                if (foundProduct) {
                    setProduct(foundProduct); // Update state with the found product
                } else {
                    setError('Product Not Found'); // Handle case where product is not found
                }
                setLoading(false); // Set loading to false
            })
            .catch(err => {
                setError(err.message); // Handle fetch errors
                setLoading(false); // Set loading to false
            });
    }, [productId]); // Dependency on productId to refetch if it changes

    if (loading) {
        return <div className="text-center text-xl">Loading...</div>; // Display loading message
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800">{error}</h1>
            </div>
        ); // Display error message
    }

    const details = [
        { heading: product.heading1, text: product.text1 },
        { heading: product.heading2, text: product.text2 },
        { heading: product.heading3, text: product.text3 },
        { heading: product.heading4, text: product.text4 },
        { heading: product.heading5, text: product.text5 },
    ];

    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg relative overflow-hidden">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                </div>
                <div className="flex justify-center mb-8">
                    <img 
                        src={product.titleImage} 
                        alt={product.title} 
                        className="max-w-full max-h-60 object-cover rounded-lg border border-gray-300" 
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    {details.map((detail, index) => (
                        detail.heading && (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{detail.heading}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{detail.text}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
