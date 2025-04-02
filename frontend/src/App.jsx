import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import FacultyAuthPage from './pages/FacultyAuthPage';
import AdminAuthPage from './pages/AdminAuthPage';
import FacultyDashboard from './pages/FacultyDashboard';
import Algorithms from './pages/study-materials/Algorithms'; // Import only Algorithms

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Hide navbar on dashboard pages
  const hideNavbarRoutes = [
    '/student-dashboard',
    '/admin-dashboard',
    '/faculty-dashboard',
    '/algorithms' // Add this if you want to hide navbar on algorithms page
  ];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/faculty" element={<FacultyAuthPage/>}/>
        <Route path="/admin" element={<AdminAuthPage/>}/>
        <Route path="/faculty-dashboard" element={<FacultyDashboard/>}/>
        
        {/* Only Algorithms route */}
        <Route path="/algorithms" element={<Algorithms />} />
      </Routes>
    </>
  );
};

export default App;