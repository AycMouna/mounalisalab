import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Upload from './pages/patient/Upload';
import Results from './pages/patient/Results';
import Profile from './pages/Profile';
import PatientDashboard from './pages/patient/PatientDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import Tutorial from './components/Tutorial'; // Import the new Tutorial component
import ExternalUpload from './pages/ExternalUpload'; // Import the ExternalUpload component
import CheckResults from './pages/CheckResults'; // Import the CheckResults component
import Contact from './pages/Contact'; // Import the Contact component
import OurTechnology from './pages/OurTechnology'; // Import the new page

import './i18n';

const AppContent = () => {
  const { i18n } = useTranslation();
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    const isHome = ["/", "/team", "/story", "/contact", "/tutorial"].includes(location.pathname);
    setIsHomePage(isHome);
  }, [location.pathname]);

  const isTransparentNavbar = isHomePage;

  // Hide Navbar on dashboard routes
  const isDashboardRoute = location.pathname.startsWith("/patient/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hide Navbar on dashboard routes */}
      {!isDashboardRoute && (
        <Navbar
          transparent={isTransparentNavbar}
          textColor={isTransparentNavbar ? "white" : "gray-800"}
          logoSize={isTransparentNavbar ? 24 : 16}
        />
      )}

      <main className="flex-grow">
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/story" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> {/* Updated to use Contact component */}
          
          <Route path="/tutorial" element={<Tutorial />} /> {/* Add the Tutorial route */}

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Patient Routes */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* External Upload Route */}
          <Route path="/external/upload" element={<ExternalUpload />} />

          {/* Check Results Route */}
          <Route path="/check-results" element={<CheckResults />} />

          <Route path="/our-technology" element={<OurTechnology />} />
          
        </Routes>
      </main>

      {/* Render Footer only on home pages */}
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