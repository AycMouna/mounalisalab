import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '/src/assets/logo2.png'; // Ensure this path is correct

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if it's a home-like page
  const isHomePage = ["/", "/team", "/story", "/contact", "/tutorial"].includes(location.pathname);

  return (
    <nav className={`top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300
      ${isHomePage ? 'bg-transparent absolute' : 'bg-white shadow-md fixed'}`}>
      
      {/* Clickable Logo and Name */}
      <Link to="/" className="flex items-center space-x-4 ml-6">
        <img src={logo} alt="Logo" className="h-16" />
        <span className={`font-semibold text-2xl ${isHomePage ? 'text-white' : 'text-blue-800'}`}> {/* Changed to text-blue-800 */}
          MounalisaLab
        </span>
      </Link>

      <div className="flex items-center space-x-4">
        {/* Contact Link */}
        <Link 
          to="/contact" 
          className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-green-400 transition-colors duration-300`}> {/* Lighter green hover */}
          Contact
        </Link>

        {/* Home Link */}
        <Link 
          to="/" 
          className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-green-400 transition-colors duration-300`}> {/* Lighter green hover */}
          Home
        </Link>

        {/* Check Results Link */}
        <Link 
          to="/check-results" 
          className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-green-400 transition-colors duration-300`}> {/* Lighter green hover */}
          Check Results
        </Link>

        {/* Sign In Button */}
        <button 
          onClick={() => navigate('/login')} 
          className={`px-4 py-2 rounded-full transition ${isHomePage ? 'bg-white/20 text-white hover:bg-green-400/20' : 'bg-gray-100 text-gray-800 hover:bg-green-400/20'}`}> {/* Lighter green hover */}
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;