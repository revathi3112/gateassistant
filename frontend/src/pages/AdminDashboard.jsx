import React, { useState } from 'react';

const AdminDashboard = () => {
    // Department data
    const departmentData = [
        { name: 'Computer Science', students: 420, faculty: 22 },
        { name: 'Electronics and Communication', students: 380, faculty: 20 },
        { name: 'Electrical and Electronics', students: 350, faculty: 18 },
        { name: 'Civil', students: 320, faculty: 16 },
        { name: 'Mechanical', students: 400, faculty: 21 },
    ];

    // Faculty data with verification status
    const [faculty, setFaculty] = useState([
        { id: 1, name: 'Dr. Rajesh Kumar', department: 'Computer Science', email: 'rajesh@example.com', status: 'verified', lastActive: '2 hours ago' },
        { id: 2, name: 'Prof. Anita Sharma', department: 'Electronics and Communication', email: 'anita@example.com', status: 'verified', lastActive: '1 day ago' },
        { id: 3, name: 'Dr. Vikram Singh', department: 'Electrical and Electronics', email: 'vikram@example.com', status: 'pending', lastActive: 'Just now' },
        { id: 4, name: 'Prof. Meena Patel', department: 'Civil', email: 'meena@example.com', status: 'verified', lastActive: '5 hours ago' },
        { id: 5, name: 'Dr. Arjun Reddy', department: 'Mechanical', email: 'arjun@example.com', status: 'rejected', lastActive: '3 days ago' },
    ]);

    // Study materials data
    const [materials, setMaterials] = useState([
        { id: 1, title: 'Data Structures Notes', department: 'Computer Science', subject: 'CS201', uploadDate: '2023-05-15', downloads: 142 },
        { id: 2, title: 'Circuit Theory Slides', department: 'Electrical and Electronics', subject: 'EE301', uploadDate: '2023-05-10', downloads: 87 },
        { id: 3, title: 'Fluid Mechanics Lab Manual', department: 'Mechanical', subject: 'ME405', uploadDate: '2023-05-05', downloads: 65 },
    ]);

    // State for active tab
    const [activeTab, setActiveTab] = useState('dashboard');
    const [newMaterial, setNewMaterial] = useState({ title: '', department: '', subject: '', file: null });
    const [questionInput, setQuestionInput] = useState({ subject: '', topic: '', difficulty: 'medium', count: 5 });

    // Verify faculty member
    const verifyFaculty = (id) => {
        setFaculty(faculty.map(f => 
            f.id === id ? { ...f, status: 'verified' } : f
        ));
    };

    // Reject faculty member
    const rejectFaculty = (id) => {
        setFaculty(faculty.map(f => 
            f.id === id ? { ...f, status: 'rejected' } : f
        ));
    };

    // Add new study material
    const addMaterial = () => {
        const newId = Math.max(...materials.map(m => m.id)) + 1;
        setMaterials([
            ...materials,
            {
                id: newId,
                title: newMaterial.title,
                department: newMaterial.department,
                subject: newMaterial.subject,
                uploadDate: new Date().toISOString().split('T')[0],
                downloads: 0
            }
        ]);
        setNewMaterial({ title: '', department: '', subject: '', file: null });
    };

    // Generate questions (mock function)
    const generateQuestions = () => {
        alert(`Generating ${questionInput.count} questions for ${questionInput.subject} (${questionInput.topic}) at ${questionInput.difficulty} difficulty`);
        // In a real app, this would call an API or question generation service
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex space-x-4">
                        <button 
                            onClick={() => setActiveTab('dashboard')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('faculty')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'faculty' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Faculty Management
                        </button>
                        <button 
                            onClick={() => setActiveTab('materials')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'materials' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Study Materials
                        </button>
                        <button 
                            onClick={() => setActiveTab('questions')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'questions' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Question Generator
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {activeTab === 'dashboard' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Institution Overview</h2>
                        
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Engineering Departments</h3>
                                <p className="text-3xl font-bold text-blue-600">{departmentData.length}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Students</h3>
                                <p className="text-3xl font-bold text-purple-600">
                                    {departmentData.reduce((sum, dept) => sum + dept.students, 0).toLocaleString()}
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Faculty</h3>
                                <p className="text-3xl font-bold text-green-600">
                                    {departmentData.reduce((sum, dept) => sum + dept.faculty, 0)}
                                </p>
                            </div>
                        </div>

                        {/* Department Table */}
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Department Statistics</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student:Faculty Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {departmentData.map((dept, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{dept.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{dept.students.toLocaleString()}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{dept.faculty}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{Math.round(dept.students / dept.faculty)}:1</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'faculty' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Faculty Management</h2>
                        
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Verification</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {faculty.map((f) => (
                                            <tr key={f.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{f.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{f.department}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{f.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                                        f.status === 'verified' ? 'bg-green-100 text-green-800' :
                                                        f.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">{f.lastActive}</td>
                                                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                                    {f.status === 'pending' && (
                                                        <>
                                                            <button 
                                                                onClick={() => verifyFaculty(f.id)}
                                                                className="px-3 py-1 bg-green-600 text-white rounded-md text-sm"
                                                            >
                                                                Verify
                                                            </button>
                                                            <button 
                                                                onClick={() => rejectFaculty(f.id)}
                                                                className="px-3 py-1 bg-red-600 text-white rounded-md text-sm"
                                                            >
                                                                Reject
                                                            </button>
                                                        </>
                                                    )}
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                                                        Monitor
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Activity Monitoring</h3>
                            <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg">
                                <p className="text-gray-500">Faculty activity logs and monitoring tools would appear here</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'materials' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Study Materials Management</h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload New Material</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            value={newMaterial.title}
                                            onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                            <select
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                value={newMaterial.department}
                                                onChange={(e) => setNewMaterial({...newMaterial, department: e.target.value})}
                                            >
                                                <option value="">Select Department</option>
                                                {departmentData.map((dept) => (
                                                    <option key={dept.name} value={dept.name}>{dept.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject Code</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                value={newMaterial.subject}
                                                onChange={(e) => setNewMaterial({...newMaterial, subject: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                                        <input
                                            type="file"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            onChange={(e) => setNewMaterial({...newMaterial, file: e.target.files[0]})}
                                        />
                                    </div>
                                    <button
                                        onClick={addMaterial}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Upload Material
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Existing Materials</h3>
                                <div className="space-y-4">
                                    {materials.map((material) => (
                                        <div key={material.id} className="border-b border-gray-200 pb-4">
                                            <h4 className="font-medium text-gray-900">{material.title}</h4>
                                            <p className="text-sm text-gray-600">{material.department} - {material.subject}</p>
                                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                                <span>Uploaded: {material.uploadDate}</span>
                                                <span>Downloads: {material.downloads}</span>
                                            </div>
                                            <div className="mt-2 space-x-2">
                                                <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                                                <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Question Generator</h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Generate New Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            value={questionInput.subject}
                                            onChange={(e) => setQuestionInput({...questionInput, subject: e.target.value})}
                                        >
                                            <option value="">Select Subject</option>
                                            <option value="Data Structures">Data Structures</option>
                                            <option value="Digital Electronics">Digital Electronics</option>
                                            <option value="Circuit Theory">Circuit Theory</option>
                                            <option value="Mechanics">Mechanics</option>
                                            <option value="Structural Analysis">Structural Analysis</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            value={questionInput.topic}
                                            onChange={(e) => setQuestionInput({...questionInput, topic: e.target.value})}
                                            placeholder="Enter specific topic or leave blank for general"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                                            <select
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                value={questionInput.difficulty}
                                                onChange={(e) => setQuestionInput({...questionInput, difficulty: e.target.value})}
                                            >
                                                <option value="easy">Easy</option>
                                                <option value="medium">Medium</option>
                                                <option value="hard">Hard</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Question Count</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="20"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                value={questionInput.count}
                                                onChange={(e) => setQuestionInput({...questionInput, count: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={generateQuestions}
                                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                    >
                                        Generate Questions
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated Questions</h3>
                                <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center">
                                    <p className="text-gray-500">Generated questions will appear here</p>
                                </div>
                                <div className="mt-4 space-x-2">
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">Save to Bank</button>
                                    <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm">Export as PDF</button>
                                    <button className="px-3 py-1 bg-gray-600 text-white rounded-md text-sm">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;