import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide content
  const slides = [
    {
      title: "MounalisaLab",
      description: "We provide medical patient specialized medical scanning",
      buttonText: "Try Now",
      buttonAction: () => navigate('/login'),
      linkText: "Tutorial",
      linkUrl: "/tutorial",
      bgImage: "/src/assets/bg3.jpg"
    },
    {
      title: "Advanced Diagnostics",
      description: "State-of-the-art equipment for accurate medical analysis",
      linkText: "Our Technology",
      linkUrl: "/our-technology",
      bgImage: "/src/assets/bg0.jpg",
      additionalImages: [
        {
          src: "/src/assets/bg1.jpg",
          position: "top-24 left-32 w-60 h-44 rotate-6"
        }
      ]
    },
    {
      title: "Expert Medical Team",
      description: "Experienced professionals dedicated to your health",
      buttonText: "Meet Our Team",
      buttonAction: () => navigate('/team'),
      bgImage: "/src/assets/bg8.jpg",
      additionalImages: [
        {
          src: "/src/assets/bg.jpg",
          position: "bottom-16 right-20 w-48 h-64 -rotate-2"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const currentContent = slides[currentSlide];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide.bgImage} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              {slide.additionalImages &&
                slide.additionalImages.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`absolute ${img.position} shadow-xl rounded-lg overflow-hidden transition-all duration-700 transform ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${imgIndex * 200}ms`, zIndex: 2 }}
                  >
                    <img src={img.src} alt={`Additional image ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 border-2 border-white/30 rounded-lg"></div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-6xl font-bold text-white mb-6 transition-all duration-500 transform">
            {currentContent.title}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl transition-all duration-500">
            {currentContent.description}
          </p>
          <div className="flex space-x-4">
            {currentContent.buttonText && currentContent.buttonAction && (
              <button
                onClick={currentContent.buttonAction}
                className="bg-white px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition"
              >
                {currentContent.buttonText}
              </button>
            )}
            {currentContent.linkText && currentContent.linkUrl && (
              <a
                href={currentContent.linkUrl}
                className="bg-white/20 px-6 py-3 rounded-full text-white hover:bg-white/30 transition"
              >
                {currentContent.linkText}
              </a>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Home;
