import React from 'react';

const Algorithms = () => {
  // Sample study materials data
  const materials = [
    {
      title: "Introduction to Algorithms (PDF Notes)",
      fileUrl: "/uploads/algorithms/intro.pdf",
      date: "2023-10-15"
    },
    {
      title: "Sorting Algorithms Cheat Sheet",
      fileUrl: "/uploads/algorithms/sorting.pdf",
      date: "2023-11-02"
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Algorithms Study Materials</h1>
      
      {materials.length > 0 ? (
        <div className="space-y-4">
          {materials.map((material, index) => (
            <div key={index} className="border p-4 rounded-lg hover:bg-gray-50">
              <h3 className="font-medium text-lg">{material.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <a 
                  href={material.fileUrl} 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <span className="text-sm text-gray-500">{material.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No study materials available yet.</p>
      )}
    </div>
  );
};

export default Algorithms;