import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardStudyMaterials = () => {
    const navigate = useNavigate();

    // List of study material topics with their corresponding route paths
    const studyMaterials = [
        { name: "General Aptitude", path: "/general-aptitude" },
        { name: "Engineering Mathematics", path: "/engineering-mathematics" },
        { name: "Digital Logic and Design", path: "/digital-logic-design" },
        { name: "Computer Organization and Architecture", path: "/computer-organization" },
        { name: "Programming and Data Structures", path: "/programming-data-structures" },
        { name: "Algorithms", path: "/algorithms" },
        { name: "Theory of Computation", path: "/theory-computation" },
        { name: "Compiler Design", path: "/compiler-design" },
        { name: "Operating Systems", path: "/operating-systems" },
        { name: "Databases", path: "/databases" },
        { name: "Computer Networks", path: "/computer-networks" }
    ];

    const handleTopicClick = (path) => {
        navigate(path);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Study Materials</h2>
            <div className="space-y-4">
                <p className="text-gray-700">Here are your study materials:</p>
                <ul className="list-disc list-inside text-gray-700">
                    {studyMaterials.map((material, index) => (
                        <li 
                            key={index} 
                            className="cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => handleTopicClick(material.path)}
                        >
                            {material.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardStudyMaterials;