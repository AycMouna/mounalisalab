import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-white text-4xl font-bold">
              <img src="/src/assets/logo2.png" alt="Logo" className="h-24" />
            </div>
            <span className="text-white font-semibold text-3xl">MounalisaLab</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/components/ContactUs.jsx" className="text-white hover:text-gray-200">Contact</a>
            <a href="#" className="text-white hover:text-gray-200">Menu</a>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <button className="bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition">
              Sign In
            </button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition">
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/src/assets/mdc.jpg" 
            alt="Medical Scan Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            MounalisaLab
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            We provide medical patient specialized medical scanning
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/login')} 
              className="bg-white px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition"
            >
              Try Now
            </button>
            <a href="/tutorial" className="bg-white/20 px-6 py-3 rounded-full text-white hover:bg-white/30 transition">
              Tutorial
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition">
          <ChevronLeft size={40} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Home;
