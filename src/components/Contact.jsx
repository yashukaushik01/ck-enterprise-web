import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 mt-16 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
            <p className="mt-2 text-center text-gray-600">You can reach us at the following:</p>
            <div className="mt-8 space-y-6">
                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
                
                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700">Email</h2>
                    <p className="text-gray-600">info@toolscompany.com</p>
                </div>

                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700">Address</h2>
                    <p className="text-gray-600">123 Tool St., Workshop City, TX 12345</p>
                </div>

                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700">Business Hours</h2>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
                    <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;