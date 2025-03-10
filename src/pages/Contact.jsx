import { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, HeartIcon, SmileIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 py-12 px-4 pt-24"> {/* Add pt-24 for padding-top */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8" role="main">
        {/* Header with a cute icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full p-4">
            <HeartIcon size={32} className="text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-800 mt-4">Contact Us</h1>
          <p className="text-pink-600 mt-2">We'd love to hear from you! 💌</p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <MailIcon size={24} className="text-pink-600 mx-auto" />
            <h3 className="text-pink-700 font-semibold mt-2">Email</h3>
            <p className="text-pink-600">support@mounalisalab.com</p>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <PhoneIcon size={24} className="text-pink-600 mx-auto" />
            <h3 className="text-pink-700 font-semibold mt-2">Phone</h3>
            <p className="text-pink-600">(+213) 795627364</p>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <MapPinIcon size={24} className="text-pink-600 mx-auto" />
            <h3 className="text-pink-700 font-semibold mt-2">Address</h3>
            <p className="text-pink-600">Constantine, Algeria</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-pink-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              placeholder="e.g., Sissi Ayachi"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-pink-700 text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              placeholder="e.g., sissi@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-pink-700 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Send Message
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 border-l-4 border-green-400 text-green-700 rounded-lg" role="alert">
              Thank you! Your message has been sent. 💖
            </div>
          )}
        </form>

        {/* Cute Footer Message */}
        <div className="mt-8 text-center text-pink-600">
          <SmileIcon size={20} className="inline-block mb-1" />
          <span className="ml-1">We're here to help you with a smile!</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;