// src/components/StudyMaterialPage.js
import React from 'react';

const StudyMaterialPage = ({ subjectName, materials }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{subjectName} Study Materials</h1>
      
      <div className="space-y-4">
        {materials.length > 0 ? (
          materials.map((material, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <h3 className="font-medium text-lg">{material.title}</h3>
              <div className="flex items-center mt-2 space-x-4">
                <a 
                  href={material.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Download PDF
                </a>
                <span className="text-gray-500 text-sm">{material.dateAdded}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No study materials uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialPage;