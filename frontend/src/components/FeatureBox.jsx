import React from 'react';

const FeatureBox = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureBox;