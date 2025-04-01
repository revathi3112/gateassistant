import React from 'react';

const DashboardStudyMaterials = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Study Materials</h2>
            <div className="space-y-4">
                <p className="text-gray-700">Here are your study materials:</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>General Aptitude</li>
                    <li>Engineering Mathematics	</li>
                    <li>Digital Logic and Design </li> 
                    <li>Computer Organization and Architecture </li> 
                    <li>Programming and Data Structures </li> 
                    <li>Alogrithms </li>  
                    <li>Theory of Computation</li>
                    <li>Compiler Design</li>
                    <li>Operating Systems</li>
                    <li>Databases</li>
                    <li>Computer Networks</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardStudyMaterials;