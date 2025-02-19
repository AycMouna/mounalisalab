import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Tutorial = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Same Navigation as Home */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4">
        {/* ... (same navigation code as home) ... */}
      </nav>

      <div className="relative h-screen">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/api/placeholder/1920/1080"
            alt="Tutorial Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Tutorial Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            How It Works
          </h1>
          
          {/* Tutorial Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">1. Upload Scan</h3>
              <p className="text-white/90">Upload your medical scan images securely to our platform</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Analysis</h3>
              <p className="text-white/90">Our AI system analyzes the scans using advanced algorithms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">3. Get Results</h3>
              <p className="text-white/90">Receive detailed analysis and recommendations</p>
            </div>
          </div>
          
          <button className="mt-12 bg-white px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition">
            Start Now
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
          <a 
            href="/" 
            className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a 
            href="/register" 
            className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;