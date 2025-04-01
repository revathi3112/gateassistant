import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const FacultyAuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [department, setDepartment] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle faculty login
        console.log('Faculty login submitted');
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle faculty registration
        console.log('Faculty registration submitted with department:', department);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animated-gradient">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {isLogin ? (
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-blue-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-800">Faculty Login</h2>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Faculty ID:</label>
                            <input
                                type="text"
                                className="w-full minimal-input"
                                placeholder="Enter your faculty ID"
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
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            FACULTY LOGIN
                        </button>
                        <div className="text-center text-gray-600">
                            New faculty member?{' '}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-purple-600 hover:underline"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="space-y-6" onSubmit={handleRegister}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-purple-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-800">Faculty Registration</h2>
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
                            <label className="block text-gray-700 mb-2">Faculty ID:</label>
                            <input
                                type="text"
                                className="w-full minimal-input"
                                placeholder="Enter your faculty ID"
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
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Institutional Email:</label>
                            <input
                                type="email"
                                className="w-full minimal-input"
                                placeholder="Enter your institutional email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Password:</label>
                            <input
                                type="password"
                                className="w-full minimal-input"
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                            REGISTER AS FACULTY
                        </button>
                        <div className="text-center text-gray-600">
                            Already registered?{' '}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-blue-600 hover:underline"
                            >
                                Faculty Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default FacultyAuthPage;