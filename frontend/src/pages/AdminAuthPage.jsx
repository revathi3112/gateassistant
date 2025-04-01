import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';

const AdminAuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [adminLevel, setAdminLevel] = useState('');
    const [department, setDepartment] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle admin login
        console.log('Admin login submitted');
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle admin registration request
        console.log('Admin access request submitted', { adminLevel, department });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animated-gradient">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {isLogin ? (
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Admin ID:</label>
                            <input
                                type="text"
                                className="w-full minimal-input"
                                placeholder="Enter your admin ID"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Password:</label>
                            <input
                                type="password"
                                className="w-full minimal-input"
                                placeholder="Type your password"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember this device
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            ADMIN LOGIN
                        </button>
                        <div className="text-center text-gray-600">
                            Need admin access?{' '}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-purple-600 hover:underline"
                            >
                                Request Access
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FontAwesomeIcon icon={faUserCog} className="text-purple-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-800">Admin Access Request</h2>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Full Name:</label>
                            <input
                                type="text"
                                className="w-full minimal-input"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Employee ID:</label>
                            <input
                                type="text"
                                className="w-full minimal-input"
                                placeholder="Enter your employee ID"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Department:</label>
                            <select 
                                className="w-full minimal-input"
                                required
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value="">Select Department</option>
                                <option value="computer_science">Computer Science</option>
                                <option value="electronics_communication">Electronics and Communication</option>
                                <option value="electrical_electronics">Electrical and Electronics</option>
                                <option value="mechanical">Mechanical</option>
                                <option value="civil">Civil</option>
                                <option value="administration">Administration</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Admin Level Needed:</label>
                            <select 
                                className="w-full minimal-input"
                                required
                                value={adminLevel}
                                onChange={(e) => setAdminLevel(e.target.value)}
                            >
                                <option value="">Select Access Level</option>
                                <option value="department">Department Admin</option>
                                <option value="academic">Academic Admin</option>
                                <option value="system">System Admin</option>
                                <option value="super">Super Admin</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Justification:</label>
                            <textarea
                                className="w-full minimal-input h-24"
                                placeholder="Explain why you need admin access"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                            REQUEST ADMIN ACCESS
                        </button>
                        <div className="text-center text-gray-600">
                            Already have access?{' '}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-blue-600 hover:underline"
                            >
                                Admin Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminAuthPage;