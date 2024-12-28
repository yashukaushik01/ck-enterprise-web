import React from 'react';

const About = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center p-6">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg relative overflow-hidden">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
                <p className="mt-2 text-center text-gray-600 mb-6">Learn more about CK Enterprises and our journey</p>

                {/* Company History */}
                <div className="space-y-6 mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Journey</h2>
                    <p className="text-lg text-gray-600">
                        CK Enterprises was founded in the late 1990s by <strong>Kameshwar Singh</strong>, a visionary entrepreneur with a passion for precision engineering. Since our inception, we have been committed to providing the highest quality CNC tools to industries across the globe.
                    </p>
                    <p className="text-lg text-gray-600">
                        Over the years, we have evolved from a small-scale operation to a world-class manufacturer. Our commitment to innovation and customer satisfaction has helped us build long-lasting relationships with our clients, earning us a reputation as a trusted partner in CNC tooling solutions.
                    </p>
                </div>

                {/* Founder Information */}
                <div className="space-y-6 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Founder: Kameshwar Singh</h2>
                    <p className="text-lg text-gray-600">
                        Kameshwar Singh, the founder of CK Enterprises, has dedicated his life to mastering the art of CNC tooling. His unwavering commitment to quality, coupled with his keen understanding of engineering, has been the driving force behind the company’s success.
                    </p>
                    <p className="text-lg text-gray-600">
                        Under his leadership, CK Enterprises has grown into a market leader in CNC tool manufacturing, with clients across various sectors, including automotive, aerospace, and manufacturing.
                    </p>
                </div>

                {/* Closing Information */}
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Continuing Our Legacy</h3>
                    <p className="text-gray-600">
                        Today, CK Enterprises continues to innovate and deliver precision-engineered solutions to meet the evolving needs of the CNC industry. Our passion for excellence and customer satisfaction remains at the heart of everything we do.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;