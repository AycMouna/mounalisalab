import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, ArrowRightIcon, HeartIcon, SmileIcon } from 'lucide-react';

const CheckResults = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleCheckResults = async (e) => {
    e.preventDefault();
    setError('');

    // Simulate API call to fetch results
    try {
      // Replace this with an actual API call to your backend
      const response = await fetch(`/api/results/${code}`);
      const data = await response.json();

      if (response.ok) {
        setResults(data); // Set the results if the code is valid
      } else {
        setError('Invalid code. Please check your code and try again.');
      }
    } catch (err) {
      setError('Failed to fetch results. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8" role="main">
        {/* Header with a cute icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center bg-pink-100 rounded-full p-4">
            <HeartIcon size={32} className="text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-800 mt-4">Check Your Scan Results</h1>
          <p className="text-pink-600 mt-2">Enter your access code to view your results!</p>
        </div>

        {/* Form for entering the access code */}
        <form onSubmit={handleCheckResults} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg" role="alert">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="code" className="block text-pink-700 text-sm font-medium mb-2">
              Enter Your Access Code
            </label>
            <input
              id="code"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400 placeholder-pink-400"
              placeholder="e.g., ABC123XYZ"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <p className="mt-1 text-xs text-pink-500">
              Enter the code you received after uploading your scan.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <span>Check Results</span>
            <ArrowRightIcon size={16} className="ml-2" />
          </button>
        </form>

        {/* Results Section */}
        {results && (
          <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-100">
            <div className="flex items-center justify-center mb-4">
              <FileTextIcon size={32} className="text-pink-600" />
            </div>
            <h2 className="text-xl font-semibold text-pink-800 mb-4">Your Scan Results</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-pink-700">Diagnosis</h3>
                <p className="text-pink-600">{results.diagnosis}</p>
              </div>
              <div>
                <h3 className="font-medium text-pink-700">Recommendations</h3>
                <p className="text-pink-600">{results.recommendations}</p>
              </div>
              <div>
                <h3 className="font-medium text-pink-700">Doctor's Notes</h3>
                <p className="text-pink-600">{results.notes}</p>
              </div>
            </div>
          </div>
        )}

        {/* Cute Footer Message */}
        <div className="mt-8 text-center text-pink-600">
          <SmileIcon size={20} className="inline-block mb-1" />
          <span className="ml-1">Thank you for trusting us with your health!</span>
        </div>
      </div>
    </div>
  );
};

export default CheckResults;