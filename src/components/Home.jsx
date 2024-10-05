import React from 'react';
// Import your hero image

const Home = () => {
    return (
        <div 
            className="flex items-center justify-center min-h-screen text-center relative home-bg" 
        >
            <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to CK Enterprises</h1>
                <p className="text-lg text-gray-600 mb-6">Your one-stop shop for CNC tools!</p>
                <p className="mb-4">
                    At CK Enterprises, we provide a wide range of high-quality CNC tools and accessories 
                    tailored to meet your machining needs. Whether you're a professional or a hobbyist, 
                    we have the right tools for you.
                </p>
                <p className="mb-6">
                    Explore our product range and take your projects to the next level. Join us in 
                    revolutionizing your machining experience with precision tools designed for excellence.
                </p>
                <a 
                    href="/products" 
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Home;
