import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, AlertCircle, Camera, Upload, Search, FileText, Shield, Clock } from 'lucide-react';

const Tutorial = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const stepsRef = useRef(null);
  
  const steps = [
    {
      title: "Welcome to MounalisaLab",
      description: "Learn how to use our AI-powered platform to analyze your X-ray scans and get accurate medical insights.",
      icon: <Camera size={32} />,
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
            <img src="/src/assets/ml.png" alt="MounalisaLab Platform" className="rounded-lg" />
          </div>
          <div className="space-y-4 w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Getting Started</h3>
            <p>MounalisaLab uses advanced AI technology to analyze your X-ray scans and help identify potential medical conditions. Our platform is designed to be user-friendly while providing accurate insights.</p>
            <p>This tutorial will guide you through the entire process from account creation to receiving AI analysis results.</p>
            <button 
              onClick={() => scrollToStep(1)} 
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
            >
              Start Tutorial <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Create Your Account",
      description: "Sign up with your details to get started with MounalisaLab.",
      icon: <FileText size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Account Creation</h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="p-3 bg-green-50 rounded-lg">
                  Click on the <span className="font-medium">Sign Up</span> button on the homepage
                </li>
                <li className="p-3 bg-green-50 rounded-lg">
                  Fill in your personal information (name, email, phone number)
                </li>
                <li className="p-3 bg-green-50 rounded-lg">
                  Create a secure password for your account
                </li>
                <li className="p-3 bg-green-50 rounded-lg">
                  Verify your email address by clicking the link sent to your inbox
                </li>
                <li className="p-3 bg-green-50 rounded-lg">
                  Complete your medical profile with relevant health information
                </li>
              </ol>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/api/placeholder/500/300" alt="Sign up process" className="rounded-lg" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(0)} 
                className="border border-green-300 px-4 py-2 rounded-full hover:bg-green-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => scrollToStep(2)} 
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Upload Your X-Ray Scan",
      description: "Learn how to properly upload your X-ray images for analysis.",
      icon: <Upload size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-pink-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/src/assets/Normal-9998.png" alt="Uploading X-ray scan" className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Uploading Your X-Ray</h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-pink-400 bg-pink-50 rounded-r-lg">
                  <h4 className="font-medium">Supported File Formats</h4>
                  <p>We accept DICOM, JPEG, PNG, and PDF formats for X-ray scans</p>
                </div>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="p-3 bg-green-50 rounded-lg">
                    Log in to your account and navigate to <span className="font-medium">Upload Scan</span>
                  </li>
                  <li className="p-3 bg-green-50 rounded-lg">
                    Click on <span className="font-medium">Choose File</span> or drag and drop your X-ray image
                  </li>
                  <li className="p-3 bg-green-50 rounded-lg">
                    Add relevant information about the scan (body part, date taken, symptoms)
                  </li>
                  <li className="p-3 bg-green-50 rounded-lg">
                    Click <span className="font-medium">Upload</span> to submit your scan for AI analysis
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(1)} 
                className="border border-green-300 px-4 py-2 rounded-full hover:bg-green-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => scrollToStep(3)} 
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Analysis Process",
      description: "Understand how our AI analyzes your X-ray scans.",
      icon: <Search size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">The AI Analysis Process</h3>
              <div className="space-y-4">
                <p>Our advanced AI model has been trained on millions of X-ray images and can detect various medical conditions with high accuracy.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-lg mb-2">Image Processing</h4>
                    <p>Your X-ray is digitally processed to enhance important features</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-medium text-lg mb-2">Pattern Recognition</h4>
                    <p>AI identifies patterns associated with different conditions</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-medium text-lg mb-2">Condition Detection</h4>
                    <p>The system flags potential medical conditions based on analysis</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-lg mb-2">Medical Verification</h4>
                    <p>Results are reviewed by specialists for accuracy (premium plan)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/src/assets/aiscan2.jpg" alt="AI analysis process" className="rounded-lg" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(2)} 
                className="border border-green-300 px-4 py-2 rounded-full hover:bg-green-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => scrollToStep(4)} 
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "View and Understand Results",
      description: "Learn how to interpret your AI analysis results.",
      icon: <FileText size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-green-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/src/assets/sc1.jpg" alt="Viewing results" className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Understanding Your Results</h3>
              <div className="space-y-4">
                <p>Once the analysis is complete, you'll receive a detailed report of the findings. Here's how to understand your results:</p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Navigate to the <span className="font-medium">Results</span> section in your dashboard
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Select the scan you want to view from your history
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    View the summary which highlights key findings and potential conditions
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Check the detailed analysis with probability scores for each identified condition
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    View highlighted areas on your X-ray where abnormalities were detected
                  </li>
                </ol>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <h4 className="font-medium">Important Note</h4>
                  <p>Our AI provides diagnostic support but is not a replacement for professional medical advice. Always consult with a healthcare provider about your results.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(3)} 
                className="border border-green-300 px-4 py-2 rounded-full hover:bg-green-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => scrollToStep(5)} 
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Managing Appointments",
      description: "Learn how to schedule appointments with specialists based on your results.",
      icon: <Clock size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Scheduling Specialist Appointments</h3>
              <div className="space-y-4">
                <p>If your scan results indicate a need for further medical attention, you can schedule appointments with specialists directly through our platform:</p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="p-3 bg-pink-50 rounded-lg">
                    From your results page, click on <span className="font-medium">Schedule Appointment</span>
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Browse available specialists based on your condition and location
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Select a convenient date and time for your appointment
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Confirm your booking and receive a confirmation email
                  </li>
                  <li className="p-3 bg-pink-50 rounded-lg">
                    Manage your appointments from the <span className="font-medium">My Appointments</span> section
                  </li>
                </ol>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <h4 className="font-medium">Premium Patient Feature</h4>
                  <p>Premium users receive priority appointment scheduling and can get virtual consultations with specialists within 24 hours.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/src/assets/ap.jpg" alt="Appointment scheduling" className="rounded-lg" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(4)} 
                className="border border-pink-300 px-4 py-2 rounded-full hover:bg-pink-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => scrollToStep(6)} 
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition flex items-center gap-2"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Privacy and Security",
      description: "Understand how we protect your medical data and personal information.",
      icon: <Shield size={32} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-pink-50 p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2">
              <img src="/src/assets/pp.jpg" alt="Privacy and security" className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Your Data Protection</h3>
              <div className="space-y-4">
                <p>At MounalisaLab, we take your privacy and data security very seriously. Here's how we protect your information:</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-lg mb-2">End-to-End Encryption</h4>
                    <p>All your medical scans and personal data are encrypted during transit and storage</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-medium text-lg mb-2">HIPAA Compliance</h4>
                    <p>Our platform adheres to strict healthcare privacy regulations</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-lg mb-2">Access Controls</h4>
                    <p>Only authorized healthcare professionals can access your medical information</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-medium text-lg mb-2">Data Ownership</h4>
                    <p>You retain full ownership of your medical data and can request deletion at any time</p>
                  </div>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <h4 className="font-medium">Privacy Settings</h4>
                  <p>You can manage your privacy preferences in your account settings to control how your data is used and shared.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToStep(5)} 
                className="border border-pink-300 px-4 py-2 rounded-full hover:bg-pink-50 transition flex items-center gap-2"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button 
                onClick={() => navigate('/login')} 
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition flex items-center gap-2"
              >
                Get Started <Check size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  const scrollToStep = (index) => {
    setCurrentStep(index);
    if (stepsRef.current) {
      const stepElement = document.getElementById(`step-${index}`);
      if (stepElement) {
        stepsRef.current.scrollTo({
          top: 0,
          left: stepElement.offsetLeft - 20,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-green-500 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How to Use MounalisaLab</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn how our AI-powered platform can help you get accurate analysis of your X-ray scans
          </p>
        </div>
      </div>
      
      {/* Steps timeline */}
      <div 
        ref={stepsRef}
        className="bg-gray-50 sticky top-0 z-10 border-b border-gray-200 overflow-x-auto whitespace-nowrap py-4 px-4 scrollbar-hide"
      >
        <div className="max-w-5xl mx-auto flex space-x-1 md:space-x-3">
          {steps.map((step, index) => (
            <div 
              id={`step-${index}`}
              key={index} 
              className={`flex flex-col items-center px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ${
                currentStep === index 
                  ? 'bg-white shadow-md' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => scrollToStep(index)}
            >
              <div className={`p-2 rounded-full mb-2 ${
                currentStep === index 
                  ? index % 2 === 0 ? 'bg-pink-100 text-pink-600' : 'bg-green-100 text-green-600'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {step.icon}
              </div>
              <span className={`text-xs md:text-sm font-medium ${
                currentStep === index 
                  ? index % 2 === 0 ? 'text-pink-600' : 'text-green-600'
                  : 'text-gray-600'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{steps[currentStep].title}</h2>
          <p className="text-gray-600 mb-8">{steps[currentStep].description}</p>
          {steps[currentStep].content}
        </div>
      </div>
      
      {/* Help section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-green-50 border border-pink-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Need additional help?</h2>
              <p className="text-gray-700 mb-6">
                Our support team is available 24/7 to assist you with any questions or issues you may encounter while using MounalisaLab.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
                  Contact Support
                </button>
                <button className="bg-white border border-green-300 px-6 py-3 rounded-full hover:bg-green-50 transition">
                  View FAQ
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <AlertCircle size={120} className="text-green-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;