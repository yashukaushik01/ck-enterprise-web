import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const contactDetails = [
        {
            title: "Phone",
            content: "+91 9310156392",
            icon: <FaPhone className="text-blue-500 text-3xl" />,
        },
        {
            title: "Email",
            content: "satender.singhck@gmail.com",
            icon: <FaEnvelope className="text-blue-500 text-3xl" />,
        },
        {
            title: "Address",
            content: "Mcf no 772, Gali no 57 Sanjay Colony, Sector 23, Faridabad-121005 Haryana",
            icon: <FaMapMarkerAlt className="text-blue-500 text-3xl" />,
        },
    ];

    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg relative overflow-hidden">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
                <p className="mt-2 text-center text-gray-600 mb-6">We’d love to hear from you!</p>
                <div className="mt-4 space-y-6">
                    {contactDetails.map((detail, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center border-l-4 border-blue-500 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="mr-4">{detail.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{detail.title}</h2>
                                <p className="text-gray-600">{detail.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
