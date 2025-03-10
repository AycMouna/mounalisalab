import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, UploadIcon, UserIcon, UserPlusIcon, HeartIcon } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ 
    email: "", 
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // API call simulation
      console.log("Login attempt:", formData);
      
      // Navigate to patient dashboard
      navigate('/patient/dashboard');
    } catch (err) {
      setError("Connection error. Please try again.");
    }
  };

  const handleExternalUpload = () => {
    navigate('/external/upload');
  };

  const handleViewResults = () => {
    navigate('/results/public');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8" role="main">
        {/* Header with a cute icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full p-4">
            <HeartIcon size={32} className="text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-800 mt-4" tabIndex="0">
            Welcome to MounalisaLab
          </h1>
          <p className="text-pink-600 mt-2">We're so happy to see you! 💖</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg" role="alert">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-pink-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-pink-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
                  value={formData.password}
                  onChange={handleChange}
                  aria-required="true"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center"
            aria-label="Sign in to your account"
          >
            <UserIcon className="mr-2" size={18} />
            Sign in
          </button>

          {/* Quick Actions Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-pink-700 mb-3">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              {/* View Scan Results (No Login Required) */}
              <button
                type="button"
                onClick={handleViewResults}
                className="py-3 px-4 bg-green-100 hover:bg-green-200 text-green-800 rounded-xl transition-colors flex items-center justify-center"
              >
                <UserPlusIcon className="mr-2" size={18} />
                Check Scan Results
              </button>

              {/* External Upload (No Login Required) */}
              <button
                type="button"
                onClick={handleExternalUpload}
                className="py-3 px-4 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-xl transition-colors flex items-center justify-center"
              >
                <UploadIcon className="mr-2" size={18} />
                Upload Scan as External Patient
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-pink-600 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-pink-700 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;