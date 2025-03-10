import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, CreditCardIcon, CheckIcon, HeartIcon, SmileIcon } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'standard', // Standard, Premium, or External patient
    location: '' // For doctor proximity searches
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Simulated API call
      console.log('Registration:', formData);
      
      // For premium patients, redirect to payment
      if (formData.accountType === 'premium') {
        navigate('/payment');
      } else {
        navigate('/login');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8" role="main">
        {/* Header with a cute icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full p-4">
            <HeartIcon size={32} className="text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-800 mt-4">Create Your Account</h1>
          <p className="text-pink-600 mt-2">Join our lovely community! 🌸</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg" role="alert">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-pink-700 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                required
                autoComplete="given-name"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-pink-700 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                required
                autoComplete="family-name"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-pink-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-pink-700 text-sm font-medium mb-2">
              Your Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="City, State or Zip Code"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              value={formData.location}
              onChange={handleChange}
            />
            <p className="mt-1 text-xs text-pink-500">
              Used for finding recommended doctors in your area
            </p>
          </div>

          <div>
            <label htmlFor="accountType" className="block text-pink-700 text-sm font-medium mb-2">
              Account Type
            </label>
            <select
              id="accountType"
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
              value={formData.accountType}
              onChange={handleChange}
            >
              <option value="standard">Standard Patient</option>
              <option value="premium">Premium Patient</option>
            </select>
          </div>

          {/* Account Type Features */}
          <div className={`p-4 rounded-xl ${formData.accountType === 'premium' ? 'bg-pink-50 border border-pink-200' : 'bg-gray-50 border border-gray-200'}`}>
            <h3 className="font-semibold text-lg mb-2 text-pink-700">
              {formData.accountType === 'premium' ? 'Premium Account Benefits' : 'Standard Account Features'}
            </h3>
            <ul className="space-y-2">
              {formData.accountType === 'premium' ? (
                <>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-pink-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Direct scan uploads without lab validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-pink-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Immediate AI analysis results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-pink-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Access to filtered doctor recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-pink-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Priority appointment bookings</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Book appointments with the lab</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Request AI analysis of lab-uploaded scans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                    <span>View results after lab approval</span>
                  </li>
                </>
              )}
            </ul>
            {formData.accountType === 'premium' && (
              <div className="mt-3 flex items-center text-pink-700">
                <CreditCardIcon size={16} className="mr-1" />
                <span className="text-sm">Requires payment after registration</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-pink-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-pink-700 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
              formData.accountType === 'premium'
                ? 'bg-pink-600 hover:bg-pink-700 text-white'
                : 'bg-pink-100 hover:bg-pink-200 text-pink-900'
            }`}
          >
            {formData.accountType === 'premium' 
              ? 'Proceed to Payment' 
              : 'Create Account'}
          </button>

          <div className="text-center text-pink-600 text-sm">
            <p>
              Need a one-time scan analysis?{' '}
              <Link to="/external/upload" className="text-pink-700 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-200">
                Upload as external patient
              </Link>
            </p>
            <p className="mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-pink-700 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-200">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;