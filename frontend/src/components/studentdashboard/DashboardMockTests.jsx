import React from 'react';

const DashboardTestSeries = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Test Series</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Row - 2 items */}
                <div className="border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Mock Tests</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                        Start Mock Test
                    </button>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Topic Wise Tests</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                        Start Topic Wise Test
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Second Row - 2 items */}
                <div className="border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Subject Wise Tests</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                        Start Subject Wise Test
                    </button>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Selected Topic Tests</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                        Start Selected Topic Test
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                {/* Third Row - 1 item (centered) */}
                <div className="border border-gray-200 p-4 rounded-lg md:col-span-2 mx-auto md:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Previous Year Question Papers</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                        Start Test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardTestSeries;