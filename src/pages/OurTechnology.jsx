import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaChartLine, FaShieldAlt, FaHandsHelping } from 'react-icons/fa'; // Icons

const OurTechnology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans">
      {/* Hero Section */}
      <div className="bg-pink-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Technology</h1>
          <p className="text-xl mb-8">
            Revolutionizing early disease prediction with cutting-edge AI classification technology.
          </p>
          <Link
            to="/contact"
            className="bg-white text-pink-600 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">What is AI Classification Technology?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI classification technology leverages advanced machine learning algorithms to analyze medical data and
            identify early signs of diseases with unparalleled accuracy. By combining deep learning, computer vision, and
            predictive analytics, we empower healthcare providers to detect diseases at their earliest stages.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <FaBrain className="text-pink-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-pink-600 mb-2">Deep Learning</h3>
            <p className="text-gray-600">
              Our AI models are trained on vast datasets to recognize patterns and anomalies in medical scans.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <FaChartLine className="text-pink-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-pink-600 mb-2">Predictive Analytics</h3>
            <p className="text-gray-600">
              We use predictive analytics to forecast disease progression and recommend personalized treatment plans.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <FaShieldAlt className="text-pink-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-pink-600 mb-2">Data Security</h3>
            <p className="text-gray-600">
              Your data is protected with state-of-the-art encryption and compliance with global privacy standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <FaHandsHelping className="text-pink-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-pink-600 mb-2">Collaborative Care</h3>
            <p className="text-gray-600">
              Our platform enables seamless collaboration between patients, doctors, and specialists.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-pink-50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-8">Why Choose Our Technology?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Early Detection</h3>
              <p className="text-gray-600">
                Detect diseases at their earliest stages, significantly improving treatment outcomes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">High Accuracy</h3>
              <p className="text-gray-600">
                Our AI achieves over 95% accuracy in disease classification, reducing false positives and negatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Personalized Insights</h3>
              <p className="text-gray-600">
                Tailored recommendations based on individual patient data for better healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Healthcare?</h2>
          <p className="text-xl mb-8">
            Join us in revolutionizing early disease detection and improving patient outcomes.
          </p>
          <Link
            to="/register"
            className="bg-white text-pink-600 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;