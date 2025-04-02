import React, { useState } from 'react';

const FacultyDashboard = () => {
    // Faculty profile data
    const [profile, setProfile] = useState({
        name: 'Dr. Rajesh Kumar',
        email: 'rajesh.kumar@university.edu',
        department: 'Computer Science',
        phone: '+91 9876543210',
        avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    });

    // Community questions
    const [questions, setQuestions] = useState([
        {
            id: 1,
            student: 'Aarav Sharma',
            course: 'CS201 - Data Structures',
            question: 'Can you explain how dynamic programming differs from divide and conquer approach?',
            date: '2 hours ago',
            replies: 3
        },
        {
            id: 2,
            student: 'Priya Patel',
            course: 'CS202 - Algorithms',
            question: 'What would be the time complexity for this specific sorting scenario?',
            date: '1 day ago',
            replies: 1
        },
        {
            id: 3,
            student: 'Rahul Verma',
            course: 'CS301 - Database Systems',
            question: 'How to optimize this SQL query for better performance?',
            date: '3 days ago',
            replies: 5
        }
    ]);

    const [activeTab, setActiveTab] = useState('profile');
    const [editMode, setEditMode] = useState(false);
    const [newQuestionReply, setNewQuestionReply] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);

    // Handle profile updates
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    // Save profile changes
    const saveProfile = () => {
        setEditMode(false);
        // In a real app, you would call an API to save changes
        alert('Profile updated successfully!');
    };

    // Post a reply to a question
    const postReply = (questionId) => {
        if (newQuestionReply.trim() === '') return;
        
        // In a real app, you would call an API to post the reply
        alert(`Reply posted to question ${questionId}: ${newQuestionReply}`);
        
        setNewQuestionReply('');
        setReplyingTo(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
                    <div className="flex space-x-4">
                        <button 
                            onClick={() => setActiveTab('profile')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            My Profile
                        </button>
                        <button 
                            onClick={() => setActiveTab('community')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'community' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Student Community
                        </button>
                        <button 
                            onClick={() => setActiveTab('materials')}
                            className={`px-4 py-2 rounded-md ${activeTab === 'materials' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Teaching Materials
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {activeTab === 'profile' && (
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                            <div className="flex-shrink-0">
                                <img 
                                    className="h-32 w-32 rounded-full object-cover" 
                                    src={profile.avatar} 
                                    alt="Faculty avatar" 
                                />
                                {editMode && (
                                    <button className="mt-2 w-full text-sm text-blue-600 hover:text-blue-800">
                                        Change Photo
                                    </button>
                                )}
                            </div>
                            
                            <div className="flex-1 space-y-4">
                                <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                                
                                {!editMode ? (
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">Name</h3>
                                            <p className="mt-1 text-gray-900">{profile.name}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">Email</h3>
                                            <p className="mt-1 text-gray-900">{profile.email}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">Department</h3>
                                            <p className="mt-1 text-gray-900">{profile.department}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">Phone Number</h3>
                                            <p className="mt-1 text-gray-900">{profile.phone}</p>
                                        </div>
                                        <button
                                            onClick={() => setEditMode(true)}
                                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={profile.name}
                                                onChange={handleProfileChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={profile.email}
                                                onChange={handleProfileChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                            <select
                                                name="department"
                                                value={profile.department}
                                                onChange={handleProfileChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            >
                                                <option value="Computer Science">Computer Science</option>
                                                <option value="Electronics and Communication">Electronics and Communication</option>
                                                <option value="Electrical and Electronics">Electrical and Electronics</option>
                                                <option value="Civil">Civil</option>
                                                <option value="Mechanical">Mechanical</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={profile.phone}
                                                onChange={handleProfileChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="flex space-x-3">
                                            <button
                                                onClick={saveProfile}
                                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                            >
                                                Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditMode(false)}
                                                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'community' && (
                    <div className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Questions</h2>
                            <p className="text-gray-600 mb-6">
                                Engage with students by answering their questions and participating in discussions.
                            </p>
                            
                            <div className="space-y-4">
                                {questions.map((q) => (
                                    <div key={q.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium text-gray-900">{q.student}</h3>
                                                <p className="text-sm text-gray-500">{q.course} • {q.date}</p>
                                            </div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {q.replies} {q.replies === 1 ? 'reply' : 'replies'}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-gray-700">{q.question}</p>
                                        
                                        {replyingTo === q.id ? (
                                            <div className="mt-4 space-y-2">
                                                <textarea
                                                    value={newQuestionReply}
                                                    onChange={(e) => setNewQuestionReply(e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    rows="3"
                                                    placeholder="Type your reply here..."
                                                ></textarea>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => postReply(q.id)}
                                                        className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                                                    >
                                                        Post Reply
                                                    </button>
                                                    <button
                                                        onClick={() => setReplyingTo(null)}
                                                        className="px-3 py-1 bg-gray-600 text-white rounded-md text-sm"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setReplyingTo(q.id)}
                                                className="mt-3 text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                Reply to this question
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Discussion Statistics</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-blue-800">Total Questions</p>
                                    <p className="text-2xl font-bold text-blue-600">{questions.length}</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-green-800">Your Responses</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {questions.reduce((sum, q) => sum + q.replies, 0)}
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-purple-800">Active Discussions</p>
                                    <p className="text-2xl font-bold text-purple-600">
                                        {questions.filter(q => q.date.includes('hour') || q.date.includes('day')).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'materials' && (
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Teaching Materials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Sample course materials - in a real app these would be dynamic */}
                            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h3 className="font-medium text-gray-900">Data Structures</h3>
                                <p className="text-sm text-gray-500 mt-1">CS201 • 12 resources</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Last updated: 2 days ago</span>
                                    <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h3 className="font-medium text-gray-900">Algorithms</h3>
                                <p className="text-sm text-gray-500 mt-1">CS202 • 8 resources</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Last updated: 1 week ago</span>
                                    <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h3 className="font-medium text-gray-900">Database Systems</h3>
                                <p className="text-sm text-gray-500 mt-1">CS301 • 15 resources</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Last updated: 3 days ago</span>
                                    <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Upload New Material
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default FacultyDashboard;