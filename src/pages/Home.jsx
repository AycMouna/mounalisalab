import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Brain, Microscope, Lock, HeartPulse, Shield, Users } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const IllustrationMedicalScan = () => (
  <svg className="w-64 h-64 animate-fade-in" viewBox="0 0 200 200">
    <rect
      x="40" y="20" width="120" height="160"
      className="fill-blue-50 stroke-blue-300"
      strokeWidth="2"
      rx="10"
    />
    <circle
      cx="100" cy="80" r="30"
      className="fill-blue-100 animate-scale-in"
    />
    <path
      d="M70 120 H130"
      className="stroke-blue-300"
      strokeWidth="2"
    />
    <path
      d="M70 130 H110"
      className="stroke-blue-300"
      strokeWidth="2"
    />
  </svg>
);

const IllustrationTeam = () => (
  <svg className="w-64 h-64" viewBox="0 0 200 200">
    <circle cx="100" cy="60" r="25" className="fill-yellow-200 animate-scale-in" />
    <circle cx="60" cy="100" r="25" className="fill-red-200 animate-scale-in delay-150" />
    <circle cx="140" cy="100" r="25" className="fill-blue-200 animate-scale-in delay-300" />
  </svg>
);

const IllustrationStory = () => (
  <svg className="w-64 h-64" viewBox="0 0 200 200">
    <path
      d="M40 40 L160 40 L160 160 L40 160 Z"
      className="fill-amber-50 stroke-amber-300"
      strokeWidth="2"
    />
    <path
      d="M60 70 L140 70"
      className="stroke-amber-300 animate-fade-in"
      strokeWidth="2"
    />
    <path
      d="M60 100 L140 100"
      className="stroke-amber-300 animate-fade-in delay-150"
      strokeWidth="2"
    />
    <path
      d="M60 130 L140 130"
      className="stroke-amber-300 animate-fade-in delay-300"
      strokeWidth="2"
    />
    <circle
      cx="40" cy="40" r="15"
      className="fill-amber-200 animate-scale-in"
    />
  </svg>
);

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "MounalisaLab",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 animate-fade-in">
            Advanced AI-Powered Medical Scan Analysis Platform
          </p>
          <IllustrationMedicalScan />
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105">
              <Brain size={20} /> Intelligent Analysis
            </div>
            <div className="flex items-center gap-2 text-pink-600 bg-pink-50 px-4 py-2 rounded-full hover:bg-pink-100 transition-colors duration-300 transform hover:scale-105">
              <HeartPulse size={20} /> Early Detection
            </div>
            <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
              <Lock size={20} /> Secure Platform
            </div>
          </div>
        </div>
      ),
      showButtons: true,
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      title: "Our Team",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 animate-fade-in">
            A dedicated team of healthcare professionals, AI specialists, and technology experts working together to revolutionize medical diagnosis.
          </p>
          <IllustrationTeam />
        </div>
      ),
      showButtons: false,
      bgColor: "from-yellow-50 to-pink-50"
    },
    {
      title: "Our Services",
      content: (
        <div className="space-y-6">
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <Microscope className="h-5 w-5 text-green-600" />
              AI-Powered Scan Analysis
            </li>
            <li className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-150">
              <Shield className="h-5 w-5 text-blue-600" />
              Secure Data Storage
            </li>
            <li className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300">
              <HeartPulse className="h-5 w-5 text-purple-600" />
              Detailed Medical Reports
            </li>
          </ul>
        </div>
      ),
      showButtons: false,
      bgColor: "from-green-50 to-blue-50"
    },
    {
      title: "Our Story",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 animate-fade-in">
            Founded in 2023, MounalisaLab emerged from a vision to transform healthcare through AI innovation. Our journey began when a team of medical professionals and AI researchers came together with a shared mission: to make advanced medical diagnostics more accessible and accurate.
          </p>
          <IllustrationStory />
          <p className="text-lg text-gray-600 animate-fade-in delay-150">
            Today, we continue to push the boundaries of what's possible in medical imaging analysis, driven by our commitment to improving patient outcomes worldwide.
          </p>
        </div>
      ),
      showButtons: false,
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 animate-fade-in">
            Have questions? Our team is here to help you with any inquiries about our platform and services.
          </p>
          <button className="px-6 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      ),
      showButtons: false,
      bgColor: "from-blue-50 to-green-50"
    }
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    },
    onSwipedRight: () => {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    },
    trackMouse: true,
  });

  const scrollToPage = (index) => {
    const container = document.getElementById("swipe-container");
    if (container) {
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  useState(() => {
    scrollToPage(currentPage);
  }, [currentPage]);

  return (
    <div
      id="swipe-container"
      className="min-h-screen flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
      {...handlers}
      role="main"
    >
      {pages.map((page, index) => (
        <div
          key={index}
          className={`min-w-full flex-shrink-0 flex flex-col items-center justify-center p-8 snap-center bg-gradient-to-b ${page.bgColor}`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight text-center mb-6 animate-fade-in">
              {page.title}
            </h1>
            {page.content}
            {page.showButtons && (
              <div className="mt-8 flex gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  role="button"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  role="button"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;