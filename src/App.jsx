import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Upload from './pages/patient/Upload';
import Results from './pages/patient/Results';
import Profile from './pages/Profile';
import PatientDashboard from './pages/patient/PatientDash';
import DoctorDashboard from './pages/doctor/DoctorDash';
import AdminDashboard from './pages/admin/AdminDash';
import './i18n';

const AppContent = () => {
  const { i18n } = useTranslation();
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Update isHomePage based on route change
  useEffect(() => {
    const isHome = ["/", "/team", "/services", "/story", "/contact"].includes(location.pathname);
    setIsHomePage(isHome);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${isHomePage ? 'swipeable-home' : ''}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/story" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Patient Routes */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />

          {/* Doctor Routes */}
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {isHomePage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 